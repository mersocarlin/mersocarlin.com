import React from 'react'
import Image from 'next/image'

import { Post } from '@mersocarlin.com/types'

import Content from './BlogPost/Content'
import BlogPostDate from './BlogPostDate'

interface BlogPostProps {
  post: Post
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article>
      <h1 className="px-4 md:px-0 pb-8 text-2xl font-bold text-center text-gray-500 dark:text-gray-200">
        {post.title}
      </h1>

      <div className="text-center">
        <Image
          className="rounded-none md:rounded"
          key={post.date}
          src={post.images.coverUrl}
          height={500}
          width={1000}
        />
      </div>

      <div className="w-full md:w-3/4 m-auto">
        <div className="py-6 text-center text-sm text-gray-500 dark:text-gray-200">
          <span>By {post.author.name}</span>
          <span>
            ・<BlogPostDate post={post} />
          </span>
          <span className="hidden md:inline-block">・</span>
          <span className="block mt-4 md:inline-block md:mt-0">
            {post.timeToRead}
          </span>
        </div>

        <div className="px-4 md:p-0">
          <Content post={post} />
        </div>
      </div>
    </article>
  )
}
