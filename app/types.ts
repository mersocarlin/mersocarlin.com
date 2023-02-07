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

export type QueryOptions = {
  q: string
  tag: string
}

export type UserInteractionEvent = {
  hash: string
  id: string
  path: string
  pathname: string
  referrer: string
  search: string
  value?: string | number
}

export type AmplitudeEvent = Omit<UserInteractionEvent, 'id'> & {
  category: 'TIMING' | 'USER'
  label:
    | 'page load'
    | 'change theme'
    | 'page view'
    | 'click edit link'
    | 'click tag'
}
