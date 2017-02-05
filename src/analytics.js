import ReactGA from 'react-ga';

import { env } from './config';

ReactGA.initialize(env.google.analyticsId);

export function logPageView () {
  if (env.environment === 'development') return;

  const { location: { pathname } } = window;

  ReactGA.set({ page: pathname });
  ReactGA.pageview(pathname);
}
