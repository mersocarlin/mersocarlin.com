import React, { useEffect } from 'react'
import Script from 'next/script'

import 'tailwindcss/tailwind.css'
import '@mersocarlin.com/styles/globals.css'

import ThemeProvider from '@mersocarlin.com/theme/ThemeProvider'
import useAnalytics from '@mersocarlin.com/hooks/useAnalytics'
import { trackPageLoad } from '@mersocarlin.com/utils/events'

export default function MyApp({ Component, pageProps }: any) {
  useAnalytics()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.performance) {
      trackPageLoad(Math.round(performance.now()))
    }
  }, [])

  return (
    <ThemeProvider>
      {pageProps.loadGA && (
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-17163651-1"
          strategy="afterInteractive"
        />
      )}
      {pageProps.loadGA && (
        <Script id="google-analytics" strategy="afterInteractive">
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-17163651-1');
              `}
        </Script>
      )}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
