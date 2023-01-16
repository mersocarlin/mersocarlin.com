import fs from 'fs'
import { bundleMDX } from 'mdx-bundler'
import calculateReadingTime from 'reading-time'
import type { Post } from '~/types'

const AUTHOR = {
  name: 'Hemerson Carlin',
  imageUrl: '/hemerson-dark.jpg',
}

function getPostFilename(slug: string): string | null {
  const dataDirectory = `${__dirname}/../data/blog`

  const slugMapContents = fs.readFileSync(`${dataDirectory}/slugMap.json`, {
    encoding: 'utf-8',
  })
  const slugMap = JSON.parse(slugMapContents)

  return slugMap[slug]
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const dataDirectory = `${__dirname}/../data/blog`
  const filename = getPostFilename(slug)

  if (!filename) {
    return null
  }

  const postContents = fs.readFileSync(`${dataDirectory}/${filename}`, {
    encoding: 'utf-8',
  })

  const { default: rehypeSlug } = await import('rehype-slug')

  const { default: rehypeAutolinkHeadings } = await import(
    'rehype-autolink-headings'
  )

  const { code, frontmatter, matter } = await bundleMDX({
    source: postContents,
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeAutolinkHeadings,
      ]

      return options
    },
  })

  const { title, excerpt, coverImage, tags } = frontmatter

  const assetsPath = `/assets/blog/${filename.substring(
    0,
    filename.length - 4
  )}`
  const readTime = calculateReadingTime(matter.content)

  return {
    author: AUTHOR,
    coverImage: {
      credit: coverImage.credit,
      url: `${assetsPath}/cover.jpg`,
    },
    date: `${filename.substring(0, 10)}T00:00:00.000Z`,
    excerpt,
    ghPath: `data/blog/${filename}`,
    mdxContent: code,
    readTime,
    slug,
    tags: tags || [],
    title,
    type: 'blogpost',
  }
}
