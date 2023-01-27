import { useEffect } from 'react'
import type { QueryOptions } from '~/types'

/**
 * From: https://github.com/kentcdodds/kentcdodds.com/blob/f49314a16dc06311cf63923a47adb9ec509260c1/app/utils/misc.tsx#L280 but adopted to support multiple query keys
 */
export default function useUpdateQueryStringValueWithoutNavigation(
  query: QueryOptions
) {
  useEffect(() => {
    const currentSearchParams = new URLSearchParams(window.location.search)
    const oldQuery = currentSearchParams.get('q') ?? ''
    const oldTag = currentSearchParams.get('tag') ?? ''

    if (query.q === oldQuery && query.tag === oldTag) {
      return
    }

    if (query.q) {
      currentSearchParams.set('q', query.q)
    } else {
      currentSearchParams.delete('q')
    }

    if (query.tag) {
      currentSearchParams.set('tag', query.tag)
    } else {
      currentSearchParams.delete('tag')
    }

    const newUrl = [window.location.pathname, currentSearchParams.toString()]
      .filter(Boolean)
      .join('?')

    window.history.replaceState(null, '', newUrl)
  }, [query.q, query.tag])
}
