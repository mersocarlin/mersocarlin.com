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
  title: string
}
