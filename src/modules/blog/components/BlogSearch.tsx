import React, { useCallback } from 'react'

import { TagT } from '@mersocarlin.com/types'
import { tagMap } from '@blog/components/BlogPostTag'
import BlogPostTag from '@blog/components/BlogPostTag'
import useBlogQuery from '@common/hooks/useBlogQuery'

function BlogSearch() {
  const { query, updateQuery } = useBlogQuery()

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value: _searchTerm } = event.target

      updateQuery({
        q: _searchTerm,
        tag: query.tag,
      })
    },
    [updateQuery, query],
  )

  const handleTagClick = useCallback(
    (tag: TagT) => () => {
      updateQuery({
        q: query.q,
        tag: tag === query.tag ? undefined : tag,
      })
    },
    [query, updateQuery],
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
        value={query.q}
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
              variant={query.tag === key ? 'color' : 'bw'}
            />
          </button>
        ))}
      </div>
    </form>
  )
}

export default BlogSearch
