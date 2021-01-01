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
  date: string
  excerpt: string
  images: {
    coverUrl: string
    ogUrl: string
  }
  previousSlugs: string[]
  slug: string
  timeToRead: string
  title: string
  wordCount: number
}
