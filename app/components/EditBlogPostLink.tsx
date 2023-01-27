import React from 'react'
import type { Post } from '~/types'
import AppLink from './AppLink'

export default function EditBlogPostLink({
  onClick,
  post,
}: {
  onClick: (event: React.MouseEvent<Element, MouseEvent>) => void
  post: Post
}) {
  if (post.type === 'preview') {
    return null
  }

  return (
    <AppLink
      href={`https://github.com/mersocarlin/mersocarlin.com/edit/master/${post.ghPath}`}
      onClick={onClick}
      target="_blank"
    >
      Edit on GitHub
    </AppLink>
  )
}
