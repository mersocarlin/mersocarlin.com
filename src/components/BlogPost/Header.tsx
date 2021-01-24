import React from 'react'

interface Props {
  as?: string
  children: string
}

function BlogPostHeader({ as = 'h2', children }: Props) {
  const idAttr = children
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^a-z0-9-]/g, '')

  if (as === 'h2') {
    return (
      <h2 className="text-2xl font-bold pt-16 -mt-16 mb-4" id={idAttr}>
        {children}
      </h2>
    )
  }

  return (
    <h3 className="my-4 text-xl font-bold pt-16 -mt-16 mb-4" id={idAttr}>
      {children}
    </h3>
  )
}

export default BlogPostHeader
