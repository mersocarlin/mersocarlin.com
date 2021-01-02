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
    <div className="mersocarlin-text-gray text-lg font-light">{content}</div>
  )
}
