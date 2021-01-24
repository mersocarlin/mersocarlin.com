import React from 'react'

interface Props {
  as?: string
  children: string
}

function slugify(text: string) {
  return (
    text
      .toLowerCase()
      .replace(/\s/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      // remove leading "-"
      .replace(/^-/g, '')
      // remove last "-"
      .replace(/-$/g, '')
      // use single "-" when more than one in a row
      .replace(/-+/g, '-')
  )
}

function BlogPostHeader({ as = 'h2', children }: Props) {
  const slug = slugify(children)

  if (as === 'h2') {
    return (
      <h2 className="text-xl font-bold pt-16 -mt-16 mb-4" id={slug}>
        {children}
      </h2>
    )
  }

  return (
    <h3 className="my-4 text-lg font-bold pt-16 -mt-16 mb-4" id={slug}>
      {children}
    </h3>
  )
}

export default BlogPostHeader
