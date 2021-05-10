import { QueryOptions } from '@mersocarlin.com/types'

function BlogSearchEmptyState({ q, tag }: QueryOptions) {
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

      {q && (
        <p className="text-2xl break-words">
          No blog posts matching{' '}
          <span className="underline font-bold">{q}</span>.
        </p>
      )}
      {tag && (
        <p className="text-2xl break-words">
          No blog posts matching tag{' '}
          <span
            className={`bg-gray-200 mersocarlin-text-gray dark:bg-gray-900 py-1 px-2 rounded text-sm`}
          >
            {tag}
          </span>
        </p>
      )}
      <p className="text-lg">Please try using another term</p>
    </div>
  )
}

export default BlogSearchEmptyState
