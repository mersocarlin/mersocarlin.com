import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import highlight from 'remark-highlight.js'
import renderToString from 'next-mdx-remote/render-to-string'

import Components from '@mersocarlin.com/components/BlogPost/Components'
import { Post } from '@mersocarlin.com/types'
import calculateTimeToRead from '@mersocarlin.com/utils/timeToRead'

const postsDirectory = join(process.cwd(), 'posts')
const allFiles: string[] = fs.readdirSync(postsDirectory)

export async function getPostBySlug(slug: string): Promise<Post> {
  const fileName = allFiles.find((file) => file.includes(slug))
  const fullPath = join(postsDirectory, `${fileName}`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
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
    ...data,
    content: mdxSource,
    previousSlugs: data.previousSlugs ? data.previousSlugs.split(',') : [],
    slug: slug.replace(/\.md$/, ''),
    timeToRead,
    wordCount,
  } as Post
}

const sortByDateDesc = (post1: Post, post2: Post) =>
  post1.date > post2.date ? -1 : 1

export async function getPosts(): Promise<Post[]> {
  const postsPromises = allFiles
    // skip template
    .filter((file) => !file.includes('POST_TEMPLATE'))
    .map((slug) => getPostBySlug(slug.substring(11)))

  const posts = await Promise.all(postsPromises)
  return posts.sort(sortByDateDesc)
}
