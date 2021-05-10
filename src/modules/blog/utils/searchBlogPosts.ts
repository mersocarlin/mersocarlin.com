import { Post, QueryOptions, TagT } from '@mersocarlin.com/types'

function filterByQuery(query?: string) {
  const regSearch = new RegExp(query || '', 'i')

  return (post: Post) => {
    if (!query) {
      return true
    }

    return regSearch.test(post.title)
  }
}

function filterByTag(tag?: TagT) {
  return (post: Post) => {
    if (!tag) {
      return true
    }

    return post.tags.includes(tag)
  }
}

export default function searchBlogPosts(posts: Post[], options: QueryOptions) {
  return posts.filter(filterByQuery(options.q)).filter(filterByTag(options.tag))
}
