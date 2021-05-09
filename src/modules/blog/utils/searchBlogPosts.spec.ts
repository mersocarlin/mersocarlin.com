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
  tags: ['javascript', 'typescript'],
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
  tags: ['docker', 'nodejs'],
  title: 'Code Snippets - uniqueId',
  type: 'preview',
}

const posts: Post[] = [atomicMoneyPost, uniqueIdPost]

describe('searchBlogPosts', () => {
  it('should return all blog posts', () => {
    const result = searchBlogPosts(posts, { query: '' })

    expect(result).toEqual(posts)
  })

  describe('query search', () => {
    it('should filter blogposts by query search', () => {
      const result = searchBlogPosts(posts, { query: 'money' })

      expect(result).toEqual([atomicMoneyPost])
    })

    it('should return no results', () => {
      const result = searchBlogPosts(posts, { query: 'empty' })

      expect(result).toEqual([])
    })
  })

  describe('tag search', () => {
    it('should filter blogposts by tag', () => {
      const result = searchBlogPosts(posts, { tag: 'javascript' })

      expect(result).toEqual([atomicMoneyPost])
    })

    it('should return no results', () => {
      const result = searchBlogPosts(posts, { tag: 'leadership' })

      expect(result).toEqual([])
    })
  })

  it('should filter posts by query and tag', () => {
    const result = searchBlogPosts(posts, {
      query: 'money',
      tag: 'javascript',
    })

    expect(result).toEqual([atomicMoneyPost])
  })
})
