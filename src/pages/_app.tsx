import React, { useEffect } from 'react'

import 'tailwindcss/tailwind.css'
import '@mersocarlin.com/styles/globals.css'

import ThemeProvider from '@mersocarlin.com/theme/ThemeProvider'
import useAnalytics from '@mersocarlin.com/hooks/useAnalytics'
import { trackPageLoad } from '@mersocarlin.com/utils/events'

export default function MApp({ Component, pageProps }: any) {
  useAnalytics()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.performance) {
      trackPageLoad(Math.round(performance.now()))
    }
  }, [])

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
