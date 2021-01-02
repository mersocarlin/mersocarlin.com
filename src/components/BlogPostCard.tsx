import React from 'react'
import Image from 'next/image'

import { Post } from '@mersocarlin.com/types'

import BlogPostDate from './BlogPostDate'
import Link from './Link'

interface BlogPostCardProps {
  disabled?: boolean
  post: Post
}

export default function BlogPostCard({ disabled, post }: BlogPostCardProps) {
  const blogContent = (
    <div
      className={`group rounded shadow-md cursor-pointer hover:shadow-lg overflow-hidden mersocarlin-bg-white mersocarlin-text-gray ${
        Boolean(disabled) ? 'cursor-default' : 'cursor-pointer'
      }`}
    >
      <Image src={post.images.coverUrl} height={500} width={1000} />
      <div className="flex justify-center flex-col justify-between p-3 h-48">
        <div className="text-center mb-2 text-xl font-bold group-hover:underline">
          {post.title}
        </div>
        <p
          className="overflow-ellipsis overflow-hidden my-2 text-sm line-clamp-3"
          title={post.excerpt}
        >
          {post.excerpt}
        </p>

        <div className="flex justify-between text-sm mersocarlin-text-gray">
          <span>{post.author.name}</span>
          <span>
            <BlogPostDate post={post} />
          </span>
        </div>
      </div>
    </div>
  )

  if (disabled) {
    return blogContent
  }

  return (
    <Link
      as={`/blog/${post.slug}`}
      hoverStyles="hover:no-underline"
      href="/blog/[slug]"
    >
      {blogContent}
    </Link>
  )
}
