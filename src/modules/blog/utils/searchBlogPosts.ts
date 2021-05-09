import { Post, TagT } from '@mersocarlin.com/types'

interface SearchOptions {
  query?: string
  tag?: TagT
}

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

export default function searchBlogPosts(posts: Post[], options: SearchOptions) {
  return posts
    .filter(filterByQuery(options.query))
    .filter(filterByTag(options.tag))
}
