export type PageProps = {
  appVersion: string
  gaId: string
}

export type PostMarkdown = {
  date: string
  excerpt: string
  title: string
}

export type Author = {
  name: string
  imageUrl: string
}

export type PostImage = {
  coverUrl: string
  ogUrl: string
}

export type Post = {
  author: Author
  content: string
  date: string
  excerpt: string
  images: PostImage
  previousSlugs: string[]
  slug: string
  timeToRead: string
  title: string
  wordCount: number
}
