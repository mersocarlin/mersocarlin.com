import React from 'react'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import Components from './Components'
import { PostMdxScope } from '@mersocarlin.com/types'

interface Props {
  mdxSource: MDXRemoteSerializeResult<PostMdxScope>
}

export default function Content({ mdxSource }: Props) {
  return (
    <div className="mersocarlin-text-gray text-lg font-light">
      <MDXRemote {...mdxSource} components={Components} />
    </div>
  )
}
