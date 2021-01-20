import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import highlight from 'remark-highlight.js'
import renderToString from 'next-mdx-remote/render-to-string'

import Components from '@mersocarlin.com/components/BlogPost/Components'
import { Author, MdxSource, Post, PostMdxScope } from '@mersocarlin.com/types'
import {
  getPreviousSlugs,
  getSlugByFileName,
  removeExtension,
  sortByDateDesc,
} from '@mersocarlin.com/utils/posts'
import calculateTimeToRead from '@mersocarlin.com/utils/timeToRead'

const root = process.cwd()

const POSTS_DIRECTORY = join(root, 'data/posts')
const ALL_BLOG_POSTS: string[] = fs.readdirSync(POSTS_DIRECTORY)
const AUTHOR: Author = {
  name: 'Hemerson Carlin',
  imageUrl: '/hemerson-dark.jpg',
}

async function getFileContentsBySlug<MdxScopeType>(
  fileOrFolderName: string,
  slug: string = '',
) {
  const filePath = slug
    ? join(root, 'data', fileOrFolderName, `${slug}.mdx`)
    : join(root, 'data', `${fileOrFolderName}.mdx`)

  const fileContents = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContents)

  const { timeToRead, wordCount } = calculateTimeToRead(content)
  const mdxSource: MdxSource<MdxScopeType> = await renderToString(content, {
    components: Components,
    mdxOptions: {
      remarkPlugins: [highlight],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
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
    mdxSource,
    timeToRead,
    wordCount,
  } = await getFileContentsBySlug<PostMdxScope>('posts', fileName)

  return {
    author: AUTHOR,
    content: mdxSource,
    date: `${fileName.substring(0, 10)}T00:00:00.000Z`,
    excerpt: mdxSource.scope.excerpt,
    coverImage: {
      height: 500,
      url: `/assets/blog/${fileName}/cover.jpg`,
      width: 1000,
    },
    ogImage: {
      url: `/assets/blog/${fileName}/og.jpg`,
      height: 200,
      width: 200,
    },
    path: `data/posts/${fileNameWithExtension}`,
    previousSlugs: getPreviousSlugs(ALL_BLOG_POSTS, fileNameWithExtension),
    slug,
    timeToRead,
    title: mdxSource.scope.title,
    wordCount,
  }
}

export async function getPageContentBySlug(
  fileOrFolderName: string,
  slug: string = '',
): Promise<Post> {
  const {
    mdxSource,
    timeToRead,
    wordCount,
  } = await getFileContentsBySlug<PostMdxScope>(fileOrFolderName, slug)

  return {
    author: AUTHOR,
    content: mdxSource,
    excerpt: mdxSource.scope.excerpt,
    coverImage: {
      height: mdxSource.scope.coverImage?.height || 0,
      url: mdxSource.scope.coverImage?.url || '',
      width: mdxSource.scope.coverImage?.width || 0,
    },
    date: mdxSource.scope.date || new Date().toISOString(),
    ogImage: {
      height: mdxSource.scope.coverImage?.height || 0,
      url: mdxSource.scope.coverImage?.url || '',
      width: mdxSource.scope.coverImage?.width || 0,
    },
    path: slug
      ? `data/${fileOrFolderName}/${slug}.mdx`
      : `data/${fileOrFolderName}.mdx`,
    slug,
    timeToRead,
    title: mdxSource.scope.title,
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
