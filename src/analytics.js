import ReactGA from 'react-ga'

import { env } from './config'

ReactGA.initialize(env.google.analyticsId)

export default function () {
  if (env.environment === 'development') {
    return
  }

  // eslint-disable-next-line no-undef
  const { location: { pathname } } = window

  ReactGA.set({ page: pathname })
  ReactGA.pageview(pathname)
}
