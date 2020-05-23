import React from 'react'

import { Post } from '../types'

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
    <React.Fragment>
      {new Intl.DateTimeFormat('en-US', options).format(new Date(post.date))}
    </React.Fragment>
  )
}
