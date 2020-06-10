import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import slug from 'remark-slug'
import headings from 'remark-autolink-headings'
import highlight from 'remark-highlight.js'

import { Post } from '../types'
import calculateTimeToRead from '../utils/timeToRead'

const postsDirectory = join(process.cwd(), 'posts')
const allFiles: string[] = fs.readdirSync(postsDirectory)

async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(slug)
    // headings goes after slug https://github.com/remarkjs/remark-autolink-headings
    .use(headings)
    .use(highlight)
    .use(html)
    .process(markdown)
  return result.toString()
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fileName = allFiles.find((file) => file.includes(slug))
  const fullPath = join(postsDirectory, `${fileName}`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const { timeToRead, wordCount } = calculateTimeToRead(content)

  return {
    ...data,
    content: await markdownToHtml(content),
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
