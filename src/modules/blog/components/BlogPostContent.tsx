import React from 'react'
import hydrate from 'next-mdx-remote/hydrate'

import Components from './Components'
import { MdxSource, PostMdxScope } from '@mersocarlin.com/types'

interface Props {
  mdxSource: MdxSource<PostMdxScope>
}

export default function Content({ mdxSource }: Props) {
  const content = hydrate(mdxSource, { components: Components })

  return (
    <div className="mersocarlin-text-gray text-lg font-light">{content}</div>
  )
}
