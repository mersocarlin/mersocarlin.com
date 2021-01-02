import React from 'react'
import hydrate from 'next-mdx-remote/hydrate'

import { Post } from '@mersocarlin.com/types'

import Components from './Components'

interface Props {
  post: Post
}

export default function BlogContent({ post }: Props) {
  const content = hydrate(post.content, { components: Components })

  return (
    <div className="text-gray-500 dark:text-gray-200 text-lg">{content}</div>
  )
}
