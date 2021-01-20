export type PageProps = {
  appVersion: string
  gaId: string
}

export type Author = {
  name: string
  imageUrl: string
}

export type PostImage = {
  height: number
  url: string
  width: number
}

export type MdxSource<MdxScopeType> = {
  compiledSources: string
  renderedOutput: string
  scope: MdxScopeType
}

export type PostMdxScope = {
  coverImage?: PostImage
  excerpt: string
  title: string
}

export type Post = {
  author: Author
  content: MdxSource<PostMdxScope>
  coverImage: PostImage
  date?: string
  excerpt?: string
  ogImage: PostImage
  path: string
  previousSlugs?: string[]
  slug: string
  timeToRead: string
  title: string
  wordCount: number
}
