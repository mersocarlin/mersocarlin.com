import React from 'react'
import Image from 'next/image'

import { Post } from '@mersocarlin.com/types'
import Link from '@common/components/Link'

import BlogPostDate from './BlogPostDate'

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
        <Image
          alt={post.title}
          itemProp="image"
          src={post.coverImage.url}
          height={post.coverImage.height}
          width={post.coverImage.width}
        />
        <div className="flex flex-col justify-between p-3 h-48">
          <div
            className="text-center text-xl font-bold group-hover:underline"
            itemProp="headline"
          >
            {post.title}
          </div>
          <p
            className="text-ellipsis overflow-hidden text-sm line-clamp-3"
            itemProp="description"
            title={post.excerpt}
          >
            {post.excerpt}
          </p>

          <div className="flex justify-between text-sm mersocarlin-text-gray font-light">
            <div
              itemProp="author"
              itemScope={true}
              itemType="https://schema.org/Person"
            >
              <span itemProp="name">{post.author.name}</span>
            </div>
            <BlogPostDate date={post.date} />
          </div>
        </div>
      </div>
    </Link>
  )
}
