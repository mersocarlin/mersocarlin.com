import React, { useEffect } from 'react'

import 'tailwindcss/tailwind.css'

import ThemeProvider from '@mersocarlin.com/theme/ThemeProvider'

import '@mersocarlin.com/styles/globals.css'
import { trackPageLoad } from '@mersocarlin.com/utils/events'

export default function MyApp({ Component, pageProps }: any) {
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
