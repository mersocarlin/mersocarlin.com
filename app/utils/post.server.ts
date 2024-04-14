import fs from 'fs'
import { bundleMDX } from 'mdx-bundler'
import calculateReadingTime from 'reading-time'
import type { Post } from '~/types'

const AUTHOR = {
  name: 'Hemerson Carlin',
  imageUrl: '/hemerson-dark.jpg',
}

function getSlugMap() {
  const dataDirectory = `${process.cwd()}/data/blog`

  const slugMapContents = fs.readFileSync(`${dataDirectory}/slugMap.json`, {
    encoding: 'utf-8',
  })

  return JSON.parse(slugMapContents)
}

function getPostFilename(slug: string): string | null {
  const slugMap = getSlugMap()

  return slugMap[slug]
}

async function parseMdxAsBlogPost({
  dataDirectory,
  filename,
  ghPath,
  slug,
}: {
  dataDirectory: string
  filename: string
  ghPath: string
  slug: string
}): Promise<Post | null> {
  const postContents = fs.readFileSync(`${dataDirectory}/${filename}`, {
    encoding: 'utf-8',
  })

  const { default: rehypeAutolinkHeadings } = await import(
    'rehype-autolink-headings'
  )
  const { default: rehypeHighlight } = await import('rehype-highlight')
  const { default: rehypeSlug } = await import('rehype-slug')

  const { code, frontmatter, matter } = await bundleMDX({
    source: postContents,
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeAutolinkHeadings as any,
        rehypeHighlight as any,
        rehypeSlug as any,
      ]

      return options
    },
  })

  const { date, title, excerpt, coverImage = {}, tags } = frontmatter
  const assetsPath = `/assets/blog/${filename.substring(
    0,
    filename.length - 4
  )}`
  const readTime = calculateReadingTime(matter.content)

  return {
    author: AUTHOR,
    coverImage: {
      credit: coverImage.credit,
      height: coverImage.height || 500,
      url: coverImage.url || `${assetsPath}/cover.jpg`,
      width: coverImage.width || 1000,
    },
    date: date || `${filename.substring(0, 10)}T00:00:00.000Z`,
    excerpt,
    ghPath: `${ghPath}/${filename}`,
    mdxContent: code,
    readTime,
    slug,
    tags: tags || [],
    title,
    type: 'blogpost',
  }
}

export async function getUses(): Promise<Post | null> {
  const dataDirectory = `${process.cwd()}/data`
  const filename = 'uses.mdx'

  return parseMdxAsBlogPost({
    dataDirectory,
    ghPath: 'data',
    filename,
    slug: 'uses',
  })
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const dataDirectory = `${process.cwd()}/data/blog`
  const filename = getPostFilename(slug)

  if (!filename) {
    return null
  }

  return parseMdxAsBlogPost({
    dataDirectory,
    filename,
    ghPath: '/data/blog',
    slug,
  })
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

export async function getAllBlogPosts() {
  const slugMap = getSlugMap()
  const dataDirectory = `${process.cwd()}/data/blog`

  return Promise.all(
    Object.keys(slugMap)
      .reverse()
      .map((slug) => {
        const filename = slugMap[slug]

        return parseMdxAsBlogPost({
          dataDirectory,
          filename,
          ghPath: '/data/blog',
          slug,
        })
      })
  ).then((posts) => posts.filter(Boolean) as Post[])
}
