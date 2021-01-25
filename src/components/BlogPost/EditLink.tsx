import React from 'react'

import Link from '@mersocarlin.com/components/Link'
import { Post } from '@mersocarlin.com/types'

type Props = {
  post: Post
}

function EditLink({ post }: Props) {
  return (
    <Link
      href={`https://github.com/mersocarlin/mersocarlin.com/edit/master/${post.path}`}
      target="_blank"
    >
      Edit on GitHub
    </Link>
  )
}

export default EditLink
