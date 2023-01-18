import fs from 'fs'
import { bundleMDX } from 'mdx-bundler'
import calculateReadingTime from 'reading-time'
import type { Post } from '~/types'

const AUTHOR = {
  name: 'Hemerson Carlin',
  imageUrl: '/hemerson-dark.jpg',
}

function getSlugMap() {
  const dataDirectory = `${__dirname}/../data/blog`

  const slugMapContents = fs.readFileSync(`${dataDirectory}/slugMap.json`, {
    encoding: 'utf-8',
  })

  return JSON.parse(slugMapContents)
}

function getPostFilename(slug: string): string | null {
  const slugMap = getSlugMap()

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

export async function getLatestBlogPosts(): Promise<Post[]> {
  const slugMap = getSlugMap()
  const keys = Object.keys(slugMap)

  const slug3 = keys[keys.length - 3]
  const slug2 = keys[keys.length - 2]
  const slug1 = keys[keys.length - 1]

  const maybePosts = await Promise.all([
    getPostBySlug(slug1),
    getPostBySlug(slug2),
    getPostBySlug(slug3),
  ])

  return maybePosts.filter(Boolean) as Post[]
}

/**
 * Get all previous slugs for a particular @fileName.
 * -------------
 * Traverses the slugMap to return the last 3 posts.
 * if index === 0: get items 3, 2 and 1
 * if index === 1: get items 3, 2 and 0
 * if index === 2: get items 3, 1 and 0
 * if index >= 3: get items index - 1, index - 2 and index - 3
 */
export async function getPreviousBlogPosts(currentSlug: string) {
  const slugMap = getSlugMap()
  const keys = Object.keys(slugMap)
  const indexOfCurrentSlug = keys.indexOf(currentSlug)

  if (indexOfCurrentSlug <= 2) {
    const postsPromise = await Promise.all(
      keys
        .filter((_, index) => index <= 3 && index !== indexOfCurrentSlug)
        .map(getPostBySlug)
    )

    return postsPromise.filter(Boolean) as Post[]
  }

  const postsPromise = await Promise.all([
    getPostBySlug(keys[indexOfCurrentSlug - 1]),
    getPostBySlug(keys[indexOfCurrentSlug - 2]),
    getPostBySlug(keys[indexOfCurrentSlug - 3]),
  ])

  return postsPromise.filter(Boolean) as Post[]
}
