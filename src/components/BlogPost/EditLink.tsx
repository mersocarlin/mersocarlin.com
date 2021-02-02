import React from 'react'

import Link from '@mersocarlin.com/components/Link'
import { Post } from '@mersocarlin.com/types'

type Props = {
  onClick: (event: React.MouseEvent<Element, MouseEvent>) => void
  post: Post
}

function EditLink({ onClick, post }: Props) {
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
