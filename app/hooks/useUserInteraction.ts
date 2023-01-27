import { useCallback } from 'react'

import { appTracker, EVENT_IDS } from '~/utils/userInteraction'

export default function useUserInteraction() {
  const trackUserInteraction = useCallback(
    (eventId: string, value: string | number) => {
      appTracker.trackEvent({
        hash: window.location.hash,
        id: eventId,
        path: `${window.location.pathname}${window.location.hash}${window.location.search}`,
        pathname: window.location.pathname,
        referrer: typeof document === 'object' ? document.referrer : '',
        search: window.location.search,
        value,
      })
    },
    []
  )

  const trackClickEditLink = useCallback(
    (component: string) =>
      trackUserInteraction(EVENT_IDS.CLICK_EDIT_LINK, component),
    [trackUserInteraction]
  )

  const trackTagClick = useCallback(
    (tag: string) => trackUserInteraction(EVENT_IDS.CLICK_TAG, tag),
    [trackUserInteraction]
  )

  const trackChangeTheme = useCallback(
    (theme: string) => trackUserInteraction(EVENT_IDS.CHANGE_THEME, theme),
    [trackUserInteraction]
  )

  const trackPageLoad = useCallback(
    (time: number) => trackUserInteraction(EVENT_IDS.PAGE_LOAD, time),
    [trackUserInteraction]
  )

  const trackPageView = useCallback(
    () => trackUserInteraction(EVENT_IDS.PAGE_VIEW, ''),
    [trackUserInteraction]
  )

  return {
    trackChangeTheme,
    trackClickEditLink,
    trackPageLoad,
    trackPageView,
    trackTagClick,
  }
}
