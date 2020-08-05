import React from 'react'

import GlobalStyles from '@mersocarlin.com/theme/GlobalStyles'
import ThemeProvider from '@mersocarlin.com/theme/ThemeProvider'

export default function MyApp({ Component, pageProps }: any) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}
