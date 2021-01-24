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
      <h2
        className="my-4 text-2xl font-bold"
        id={idAttr}
        style={{
          scrollMarginTop: 70,
        }}
      >
        {children}
      </h2>
    )
  }

  return (
    <h3
      className="my-4 text-xl font-bold"
      id={idAttr}
      style={{
        scrollMarginTop: 70,
      }}
    >
      {children}
    </h3>
  )
}

export default BlogPostHeader
