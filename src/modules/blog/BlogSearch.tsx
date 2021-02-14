import React, { useCallback } from 'react'
import { useRouter } from 'next/router'

type Props = {
  searchTerm: string
}

function BlogSearch({ searchTerm }: Props) {
  const { replace } = useRouter()

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value: _searchTerm } = event.target
      replace(_searchTerm ? `/blog?q=${_searchTerm}` : '/blog', undefined, {
        shallow: true,
      })
    },
    [replace],
  )

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
    },
    [],
  )

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-full h-12 px-3 rounded focus:outline-none focus:shadow-outline text-xl px-4 shadow mersocarlin-text-gray"
        onChange={handleChange}
        placeholder="Search for blog posts"
        type="search"
        value={searchTerm}
      />
    </form>
  )
}

export default BlogSearch
