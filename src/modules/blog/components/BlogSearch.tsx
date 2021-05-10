import React, { useCallback } from 'react'

import { QueryOptions, TagT } from '@mersocarlin.com/types'
import { tagMap } from '@blog/components/BlogPostTag'
import BlogPostTag from '@blog/components/BlogPostTag'

type Props = {
  onChange: (newValue: QueryOptions) => void
  value: QueryOptions
}

function BlogSearch({ onChange, value }: Props) {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value: _searchTerm } = event.target

      onChange({
        q: _searchTerm,
        tag: value.tag,
      })
    },
    [onChange, value],
  )

  const handleTagClick = useCallback(
    (tag: TagT) => () => {
      onChange({
        q: value.q,
        tag: tag === value.tag ? undefined : tag,
      })
    },
    [onChange, value],
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
            onClick={handleTagClick(key as TagT)}
          >
            <BlogPostTag
              tag={key as TagT}
              variant={value.tag === key ? 'color' : 'bw'}
            />
          </button>
        ))}
      </div>
    </form>
  )
}

export default BlogSearch
