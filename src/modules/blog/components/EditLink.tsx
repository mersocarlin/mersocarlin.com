import React from 'react'

import Link from '@common/components/Link'
import { Post } from '@mersocarlin.com/types'

type Props = {
  onClick: (event: React.MouseEvent<Element, MouseEvent>) => void
  post: Post
}

function EditLink({ onClick, post }: Props) {
  if (post.type === 'preview') {
    return null
  }

  return (
    <Link
      href={`https://github.com/mersocarlin/mersocarlin.com/edit/master/${post.path}`}
      onClick={onClick}
      target="_blank"
    >
      Edit on GitHub
    </Link>
  )
}

export default EditLink
