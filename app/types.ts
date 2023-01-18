export type Post = {
  author: {
    name: string
    imageUrl: string
  }
  coverImage: {
    credit: string
    url: string
    height: number
    width: number
  }
  date: string
  excerpt: string
  ghPath: string
  mdxContent: string
  readTime: {
    text: string
  }
  slug: string
  tags: string[]
  title: string
  type: 'blogpost' | 'preview'
}
