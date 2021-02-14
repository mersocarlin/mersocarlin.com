import React from 'react'

type Props = {
  searchTerm: string
}

function BlogSearchEmptyState({ searchTerm }: Props) {
  return (
    <div className="flex flex-col space-y-4 text-center mersocarlin-text-gray">
      <svg
        className="w-20 h-20 mx-auto mersocarlin-text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      <p className="text-2xl break-words">
        No blog posts matching{' '}
        <span className="underline font-bold">{searchTerm}</span>.
      </p>
      <p className="text-lg">Please try using another term</p>
    </div>
  )
}

export default BlogSearchEmptyState
