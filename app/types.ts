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

/** Twitter types  */
export type TweetAuthor = {
  name: string
  profileImageUrl: string
  username: string
  verified: boolean
}

export type TweetImage = {
  height: number
  url: string
  width: number
}

export type TweetEntity = {
  end: number
  start: number
} & (
  | {
      description: string
      images: TweetImage[]
      title: string
      type: 'url'
      url: string
    }
  | {
      type: 'mention'
      username: string
    }
)

export type Tweet = {
  author: TweetAuthor
  createdAt: string
  entities: TweetEntity[]
  id: string
  likes: number
  retweets: number
  text: string
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
