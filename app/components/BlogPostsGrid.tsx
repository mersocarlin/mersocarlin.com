import type { PropsWithChildren } from 'react'

export default function BlogPostsGrid({ children }: PropsWithChildren) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </ul>
  )
}
