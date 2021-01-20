import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import highlight from 'remark-highlight.js'
import renderToString from 'next-mdx-remote/render-to-string'

import Components from '@mersocarlin.com/components/BlogPost/Components'
import { Post, PostMarkdown } from '@mersocarlin.com/types'
import {
  getImages,
  getPreviousSlugs,
  getSlugByFileName,
  removeExtension,
  sortByDateDesc,
} from '@mersocarlin.com/utils/posts'
import calculateTimeToRead from '@mersocarlin.com/utils/timeToRead'

const root = process.cwd()

const POSTS_DIRECTORY = join(root, 'data/posts')
const ALL_BLOG_POSTS: string[] = fs.readdirSync(POSTS_DIRECTORY)

export async function getFileContentsBySlug(
  fileOrFolderName: string,
  slug: string = '',
) {
  const filePath = slug
    ? join(root, 'data', fileOrFolderName, `${slug}.mdx`)
    : join(root, 'data', `${fileOrFolderName}.mdx`)

  const fileContents = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContents)

  const { timeToRead, wordCount } = calculateTimeToRead(content)
  const mdxSource: string = await renderToString(content, {
    components: Components,
    mdxOptions: {
      remarkPlugins: [highlight],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    data,
    mdxSource,
    timeToRead,
    wordCount,
  }
}

export async function getBlogPostBySlug(slug: string): Promise<Post> {
  const fileNameWithExtension = ALL_BLOG_POSTS.find((file) =>
    file.includes(slug),
  ) as string
  const fileName = removeExtension(fileNameWithExtension)

  const {
    data,
    mdxSource,
    timeToRead,
    wordCount,
  } = await getFileContentsBySlug('posts', fileName)

  return {
    author: {
      name: 'Hemerson Carlin',
      imageUrl: '/hemerson-dark.jpg',
    },
    content: mdxSource,
    date: `${fileName.substring(0, 10)}T00:00:00.000Z`,
    excerpt: (data as PostMarkdown).excerpt,
    fileName,
    images: getImages(fileName),
    previousSlugs: getPreviousSlugs(ALL_BLOG_POSTS, fileNameWithExtension),
    slug,
    timeToRead,
    title: (data as PostMarkdown).title,
    wordCount,
  }
}

export async function getAllBlogPosts(): Promise<Post[]> {
  const postsPromises = ALL_BLOG_POSTS.map((fileName) =>
    getBlogPostBySlug(getSlugByFileName(fileName)),
  )

  const posts = await Promise.all(postsPromises)
  return posts.sort(sortByDateDesc)
}
