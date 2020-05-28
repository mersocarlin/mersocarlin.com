import { Post } from '../types'

export const createBlogPostPlaceholder = (slug: string): Post => ({
  author: {
    name: 'Hemerson Carlin',
    imageUrl: '/hemerson-dark.jpg',
  },
  content: '',
  coverImageUrl: '/assets/blog/blog-post-placeholder.jpg',
  date: new Date().toISOString(),
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  ogImage: {
    url: '/assets/blog/blog-post-placeholder.jpg',
  },
  previousSlugs: [],
  slug,
  timeToRead: '',
  title: '🔜 Coming soon 🔜',
  wordCount: 0,
})
