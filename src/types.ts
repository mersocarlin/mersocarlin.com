import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type PageProps = {
  appVersion: string
}

export type Author = {
  name: string
  imageUrl: string
}

export type PostImage = {
  credit?: string
  height: number
  url: string
  width: number
}

export type TagT =
  | 'aspnet'
  | 'career'
  | 'ci/cd'
  | 'css'
  | 'docker'
  | 'heroku'
  | 'javascript'
  | 'leadership'
  | 'nodejs'
  | 'personal'
  | 'reactjs'
  | 'styled-components'
  | 'tailwindcss'
  | 'testing'
  | 'typescript'
  | 'vercel'

export type PostMdxScope = {
  coverImage?: PostImage
  date?: string
  excerpt: string
  ogImage?: PostImage
  title: string
  tags: TagT[]
}

export type Post = {
  author: Author
  coverImage: PostImage
  date: string
  excerpt: string
  slug: string
  title: string
  tags: TagT[]
} & (
  | {
      type: 'preview'
    }
  | {
      content: MDXRemoteSerializeResult<PostMdxScope>
      ogImage: PostImage
      path: string
      previousSlugs?: string[]
      timeToRead: string
      type: 'blogpost'
      wordCount: number
    }
)

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
