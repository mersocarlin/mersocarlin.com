import React from 'react'

import 'tailwindcss/tailwind.css'

import ThemeProvider from '@mersocarlin.com/theme/ThemeProvider'

import '@mersocarlin.com/styles/globals.css'

export default function MyApp({ Component, pageProps }: any) {
  return (
    <React.Fragment>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}
