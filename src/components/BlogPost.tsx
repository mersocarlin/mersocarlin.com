import React from 'react'
import Image from 'next/image'

import { Post } from '@mersocarlin.com/types'

import Content from './BlogPost/Content'
import EditLink from './BlogPost/EditLink'
import BlogPostDate from './BlogPostDate'
import ContributionBox from './BlogPost/ContributionBox'

interface BlogPostProps {
  post: Post
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article>
      <h1 className="px-4 md:px-0 pb-8 text-2xl font-bold text-center mersocarlin-text-gray">
        {post.title}
      </h1>

      <div className="text-center">
        <Image
          className="rounded-none md:rounded"
          key={post.title}
          src={post.coverImage.url}
          height={post.coverImage.height}
          width={post.coverImage.width}
        />
      </div>

      <div className="w-full md:w-3/4 m-auto">
        <div className="py-6 text-center text-sm mersocarlin-text-gray">
          <div>
            <span>By {post.author.name}</span>
            {post.date && (
              <span>
                ・<BlogPostDate date={post.date} />
              </span>
            )}
          </div>

          <div className="pt-2">
            <span>{post.timeToRead}</span>
            <span>・</span>
            <EditLink post={post} />
          </div>
        </div>

        <div className="px-4 md:p-0">
          <Content mdxSource={post.content} />
        </div>

        <div className="px-4 md:p-0 mt-8">
          <ContributionBox post={post} />
        </div>
      </div>
    </article>
  )
}
