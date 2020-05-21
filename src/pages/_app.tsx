import React from 'react'

import GlobalStyles from '../theme/GlobalStyles'
import ThemeProvider from '../theme/ThemeProvider'

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
