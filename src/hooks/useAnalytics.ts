import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { trackPageView } from '@mersocarlin.com/utils/events'

function useAnalytics() {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL, { shallow }: any) => {
      if (shallow) {
        return
      }

      trackPageView(url)
    }

    trackPageView(router.asPath)

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
}

export default useAnalytics
