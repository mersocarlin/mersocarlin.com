import { useFetcher } from '@remix-run/react'
import { useCallback } from 'react'

export default function useUserInteraction() {
  const fetcher = useFetcher()

  const trackUserInteraction = useCallback(
    (event: string, value: string) => {
      fetcher.submit(
        {
          event,
          path: `${window.location.pathname}${window.location.hash}${window.location.search}`,
          value,
        },
        {
          action: 'action/user-interaction',
          method: 'post',
        }
      )
    },
    [fetcher]
  )

  const trackClickEditLink = useCallback(
    (component: string) => trackUserInteraction('click-edit-link', component),
    [trackUserInteraction]
  )

  const trackTagClick = useCallback(
    (tag: string) => trackUserInteraction('click-tag-click', tag),
    [trackUserInteraction]
  )

  return {
    trackClickEditLink,
    trackTagClick,
  }
}
