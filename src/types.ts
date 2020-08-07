export interface PageProps {
  appVersion: string
  gaId: string
}

export interface Post {
  author: {
    name: string
    imageUrl: string
  }
  content: string
  coverImageUrl: string
  date: string
  excerpt: string
  ogImage: {
    url: string
  }
  previousSlugs: string[]
  slug: string
  timeToRead: string
  title: string
  wordCount: number
}
