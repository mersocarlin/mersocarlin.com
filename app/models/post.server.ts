import fs from 'fs'
import { marked } from 'marked'

function getPostFilename(slug: string): string | null {
  const dataDirectory = `${__dirname}/../data/blog`

  const slugMapContents = fs.readFileSync(`${dataDirectory}/slugMap.json`, {
    encoding: 'utf-8',
  })
  const slugMap = JSON.parse(slugMapContents)

  return slugMap[slug]
}

export function getPostBySlug(slug: string) {
  const dataDirectory = `${__dirname}/../data/blog`
  const filename = getPostFilename(slug)

  if (!filename) {
    return null
  }

  const postContents = fs.readFileSync(`${dataDirectory}/${filename}`, {
    encoding: 'utf-8',
  })

  return marked(postContents)
}
