import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function BlogSearch() {
  const { query, replace } = useRouter()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (query.q && typeof query.q === 'string') {
      setSearchTerm(query.q)
    }
  }, [query.q])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value: _searchTerm } = event.target
      setSearchTerm(_searchTerm)
      replace(_searchTerm ? `/blog?q=${_searchTerm}` : '/blog', undefined, {
        shallow: true,
      })
    },
    [],
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
        className="w-full h-12 px-3 rounded focus:outline-none focus:shadow-outline text-xl px-4 shadow"
        onChange={handleChange}
        placeholder="Search for blog posts"
        type="search"
        value={searchTerm}
      />
    </form>
  )
}

export default BlogSearch
