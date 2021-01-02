import React, { Fragment } from 'react'

import { Post } from '@mersocarlin.com/types'

import Link from './Link'
import BlogPostCard from './BlogPostCard'
import BlogPostsGrid from './BlogPostsGrid'

interface PreviousBlogPostsProps {
  posts: Post[]
}

export default function PreviousBlogPosts({ posts }: PreviousBlogPostsProps) {
  return (
    <Fragment>
      <div className="flex items-center flex-col md:flex-row justify-between mb-8">
        <div className="mersocarlin-text-gray font-bold text-xl mb-4 md:mb-0">
          Previous Blog Posts
        </div>
        <Link
          className="group inline-flex items-center"
          as="/blog"
          href="/blog"
        >
          View all blog posts{' '}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <BlogPostsGrid>
        {posts.map((post) => (
          <BlogPostCard
            disabled={post.content === ''}
            key={post.slug}
            post={post}
          />
        ))}
      </BlogPostsGrid>
    </Fragment>
  )
}
