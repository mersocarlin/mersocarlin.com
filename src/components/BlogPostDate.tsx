import React from 'react'

import { Post } from '@mersocarlin.com/types'

interface BlogPostDateProps {
  post: Post
}

export default function BlogPostDate({ post }: BlogPostDateProps) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return (
    <time dateTime={post.date}>
      {new Intl.DateTimeFormat('en-US', options).format(new Date(post.date))}
    </time>
  )
}
