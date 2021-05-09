import { useCallback, useMemo } from 'react'

import { useRouter } from 'next/router'
import { TagT } from '@mersocarlin.com/types'

type QueryOptions = {
  q?: string
  tag?: TagT
}

export default function useBlogQuery() {
  const { query, replace } = useRouter()

  const q = useMemo(
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

      replace(`/blog?${queryString}`, undefined, {
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
