import { Post } from '@mersocarlin.com/types'

interface SearchOptions {
  query?: string
}

export default function searchBlogPosts(posts: Post[], options: SearchOptions) {
  if (!options.query) {
    return posts
  }

  const regSearch = new RegExp(options.query, 'i')

  return posts.filter((post) => {
    return regSearch.test(post.title)
  })
}
