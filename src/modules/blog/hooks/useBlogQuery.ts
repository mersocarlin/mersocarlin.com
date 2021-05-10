import { useCallback, useMemo } from 'react'

import { useRouter } from 'next/router'
import { QueryOptions, TagT } from '@mersocarlin.com/types'

export default function useBlogQuery() {
  const { query, replace } = useRouter()

  const q: string = useMemo(
    () => (query.q && typeof query.q === 'string' ? query.q : ''),
    [query],
  )

  const tag: TagT | undefined = useMemo(
    () =>
      (query.tag && typeof query.tag === 'string'
        ? query.tag
        : undefined) as TagT,
    [query],
  )

  const updateQuery = useCallback(
    ({ q: newQ, tag: newTag }: QueryOptions) => {
      const queryString = [
        newQ ? `q=${newQ}` : '',
        newTag ? `tag=${newTag}` : '',
      ]
        .filter(Boolean)
        .join('&')

      replace(queryString ? `/blog?${queryString}` : '/blog', undefined, {
        shallow: true,
      })
    },
    [replace],
  )

  return {
    query: {
      q,
      tag,
    },
    updateQuery,
  }
}
