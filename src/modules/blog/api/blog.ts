import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import highlight from 'remark-highlight.js'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import { Author, Post, PostMdxScope } from '@mersocarlin.com/types'
import {
  getPreviousSlugs,
  getSlugByFileName,
  removeExtension,
  sortByDateDesc,
} from '@mersocarlin.com/utils/posts'
import calculateTimeToRead from '@mersocarlin.com/utils/timeToRead'

const root = process.cwd()

const POSTS_DIRECTORY = join(root, 'data/blog')
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

  const mdxSource: MDXRemoteSerializeResult<MdxScopeType> = (await serialize(
    content,
    {
      mdxOptions: {
        remarkPlugins: [highlight],
        rehypePlugins: [],
      },
      scope: data,
    },
  )) as MDXRemoteSerializeResult<MdxScopeType>

  return {
    mdxSource,
    timeToRead,
    wordCount,
  }
}

function getBlogPostFileName(slug: string) {
  const fileNameWithExtension = ALL_BLOG_POSTS.find((file) =>
    file.includes(slug),
  ) as string
  const fileName = removeExtension(fileNameWithExtension)

  return {
    fileName,
    fileNameWithExtension,
  }
}

export async function getBlogPostPreviewBySlug(slug: string): Promise<Post> {
  const { fileName } = getBlogPostFileName(slug)
  const { mdxSource } = await getFileContentsBySlug<PostMdxScope>(
    'blog',
    fileName,
  )

  const scope = mdxSource.scope || { excerpt: '', title: '', tags: [] }
  const { coverImage } = scope

  return {
    author: AUTHOR,
    coverImage: {
      credit: coverImage?.credit || '',
      height: coverImage?.height || 500,
      url: coverImage?.url || `/assets/blog/${fileName}/cover.jpg`,
      width: coverImage?.width || 1000,
    },
    date: `${fileName.substring(0, 10)}T00:00:00.000Z`,
    excerpt: scope.excerpt,
    slug,
    tags: scope.tags || [],
    title: scope.title,
    type: 'preview',
  }
}

export async function getBlogPostBySlug(slug: string): Promise<Post> {
  const { fileName, fileNameWithExtension } = getBlogPostFileName(slug)
  const {
    mdxSource,
    timeToRead,
    wordCount,
  } = await getFileContentsBySlug<PostMdxScope>('blog', fileName)

  const scope = mdxSource.scope || { excerpt: '', title: '', tags: [] }
  const { coverImage, ogImage } = scope

  return {
    author: AUTHOR,
    content: mdxSource,
    date: `${fileName.substring(0, 10)}T00:00:00.000Z`,
    excerpt: scope.excerpt,
    coverImage: {
      credit: coverImage?.credit || '',
      height: coverImage?.height || 500,
      url: coverImage?.url || `/assets/blog/${fileName}/cover.jpg`,
      width: coverImage?.width || 1000,
    },
    ogImage: {
      height: ogImage?.height || 200,
      url: ogImage?.url || `/assets/blog/${fileName}/og.jpg`,
      width: ogImage?.width || 200,
    },
    path: `data/blog/${fileNameWithExtension}`,
    previousSlugs: getPreviousSlugs(ALL_BLOG_POSTS, fileNameWithExtension),
    slug,
    tags: scope.tags || [],
    timeToRead,
    title: scope.title,
    type: 'blogpost',
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

  const scope = mdxSource.scope || { excerpt: '', title: '', tags: [] }

  return {
    author: AUTHOR,
    content: mdxSource,
    excerpt: scope.excerpt,
    coverImage: {
      height: scope.coverImage?.height || 0,
      url: scope.coverImage?.url || '',
      width: scope.coverImage?.width || 0,
    },
    date: scope.date || new Date().toISOString(),
    ogImage: {
      height: scope.coverImage?.height || 0,
      url: scope.coverImage?.url || '',
      width: scope.coverImage?.width || 0,
    },
    path: slug
      ? `data/${fileOrFolderName}/${slug}.mdx`
      : `data/${fileOrFolderName}.mdx`,
    slug,
    tags: scope.tags || [],
    timeToRead,
    title: scope.title,
    type: 'blogpost',
    wordCount,
  }
}

export async function getAllBlogPostsPreview(): Promise<Post[]> {
  const postsPromises = ALL_BLOG_POSTS.map((fileName) =>
    getBlogPostPreviewBySlug(getSlugByFileName(fileName)),
  )

  const posts = await Promise.all(postsPromises)

  const today = new Date().getTime()
  const isProduction = process.env.NODE_ENV === 'production'

  // Omit future blog posts if running in production
  return posts
    .filter((post) =>
      isProduction ? new Date(post.date).getTime() <= today : true,
    )
    .sort(sortByDateDesc)
}
