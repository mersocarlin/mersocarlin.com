import React from 'react'

interface Props {
  children: React.ReactNode
}

function BlogPostsGrid({ children }: Props) {
  return (
    <ul className="px-4 md:px-0 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </ul>
  )
}

export default BlogPostsGrid
