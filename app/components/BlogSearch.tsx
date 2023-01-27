import { useCallback } from 'react'

import type { QueryOptions } from '~/types'
import BlogPostTag, { tagMap } from './BlogPostTag'

export default function BlogSearch({
  onChange,
  value,
}: {
  onChange: (newValue: QueryOptions) => void
  value: QueryOptions
}) {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value: _searchTerm } = event.target

      onChange({
        q: _searchTerm,
        tag: value.tag,
      })
    },
    [onChange, value]
  )

  const handleTagClick = useCallback(
    (tag: string) => () => {
      onChange({
        q: value.q,
        tag: tag === value.tag ? '' : tag,
      })
    },
    [onChange, value]
  )

  return (
    <form
      action="/blog"
      method="GET"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        data-test-id="blog-search-input"
        onChange={handleChange}
        placeholder="Search for blog posts"
        type="search"
        value={value.q}
      />

      <div className="flex flex-wrap justify-center mt-2">
        {Object.keys(tagMap).map((key) => (
          <button
            className="mb-1 mr-1 focus:outline-none"
            data-test-id={`blog-search-tag-${key}`}
            key={key}
            onClick={handleTagClick(key)}
          >
            <BlogPostTag
              tag={key}
              variant={value.tag === key ? 'color' : 'bw'}
            />
          </button>
        ))}
      </div>
    </form>
  )
}
