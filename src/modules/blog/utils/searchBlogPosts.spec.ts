import { Post } from '@mersocarlin.com/types'

import searchBlogPosts from './searchBlogPosts'

const atomicMoneyPost: Post = {
  author: {
    imageUrl: '',
    name: '',
  },
  coverImage: {
    height: 0,
    url: '',
    width: 0,
  },
  date: new Date().toISOString(),
  excerpt: '',
  slug: 'atomic-money-from-a-spreadsheet-to-a-side-project',
  tags: [],
  title: 'Atomic Money - from a spreadsheet to a side project',
  type: 'preview',
}

const uniqueIdPost: Post = {
  author: {
    imageUrl: '',
    name: '',
  },
  coverImage: {
    height: 0,
    url: '',
    width: 0,
  },
  date: new Date().toISOString(),
  excerpt: '',
  slug: 'code-snippets-uniqueid',
  tags: [],
  title: 'Code Snippets - uniqueId',
  type: 'preview',
}

const posts: Post[] = [atomicMoneyPost, uniqueIdPost]

describe('searchBlogPosts', () => {
  it('should return all blog posts', () => {
    const result = searchBlogPosts(posts, { query: '' })

    expect(result).toEqual(posts)
  })

  describe('text search', () => {
    it('should filter blogposts by query search', () => {
      const result = searchBlogPosts(posts, { query: 'money' })

      expect(result).toEqual([atomicMoneyPost])
    })

    it('should return no results', () => {
      const result = searchBlogPosts(posts, { query: 'empty' })

      expect(result).toEqual([])
    })
  })
})
