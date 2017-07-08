import ReactGA from 'react-ga'

import { env } from './config'

ReactGA.initialize(env.google.analyticsId)

export default function(location) {
  if (env.environment === 'development') {
    return
  }

  ReactGA.set({ page: location })
  ReactGA.pageview(location)
}
