import React from 'react'
import Image from 'next/image'

import { Post } from '@mersocarlin.com/types'

import BlogPostDate from './BlogPostDate'
import Link from './Link'

interface BlogPostCardProps {
  post: Post
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link
      as={`/blog/${post.slug}`}
      hoverStyles="hover:no-underline"
      href="/blog/[slug]"
    >
      <div className="group rounded shadow-md cursor-pointer hover:shadow-lg overflow-hidden mersocarlin-bg-white mersocarlin-text-gray">
        <Image src={post.images.coverUrl} height={500} width={1000} />
        <div className="flex justify-center flex-col justify-between p-3 h-48">
          <div
            className="text-center mb-2 text-xl font-bold group-hover:underline"
            itemProp="name"
          >
            {post.title}
          </div>
          <p
            className="overflow-ellipsis overflow-hidden my-2 text-sm line-clamp-3"
            itemProp="name"
            title={post.excerpt}
          >
            {post.excerpt}
          </p>

          <div className="flex justify-between text-sm mersocarlin-text-gray font-light">
            <span>{post.author.name}</span>
            <span>
              <BlogPostDate post={post} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
