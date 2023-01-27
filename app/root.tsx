import { useEffect, useRef } from 'react'
import type {
  DataFunctionArgs,
  LinksFunction,
  MetaFunction,
} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from '@remix-run/react'
import clsx from 'clsx'

import pkg from '../package.json'
import Layout from './components/Layout'
import styles from './tailwind.css'
import ThemeProvider, { useTheme } from './providers/ThemeProvider'
import { getThemeSession } from './utils/theme.server'
import { getSocialMeta } from './utils/seo'
import { socialListItems } from './utils/social'
import useUserInteraction from './hooks/useUserInteraction'
import { pageview } from './utils/gtags.client'

export const links: LinksFunction = () => [
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/JosefinSans_Italic.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/JosefinSans_Regular.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicons/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicons/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicons/favicon-16x16.png',
  },
  {
    rel: 'manifest',
    href: '/site.webmanifest',
  },
  {
    rel: 'stylesheet',
    href: styles,
  },
]

export const meta: MetaFunction = () => {
  return {
    author: 'Hemerson Carlin',
    charset: 'utf-8',
    robots: 'follow, index',
    viewport:
      'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no',
    ...getSocialMeta(),
  }
}

export async function loader({ request }: DataFunctionArgs) {
  const themeSession = await getThemeSession(request)

  return {
    appVersion: pkg.version,
    gaTrackingId:
      process.env.CONFIG_ENV === 'production'
        ? process.env.GA_TRACKING_ID || ''
        : '',
    path: new URL(request.url).pathname,
    theme: themeSession.getTheme(),
  }
}

function useTrackPageLoad() {
  const hasTrackedPageLoad = useRef(false)
  const { trackPageLoad } = useUserInteraction()

  useEffect(() => {
    if (
      !hasTrackedPageLoad.current &&
      typeof window !== 'undefined' &&
      window.performance
    ) {
      hasTrackedPageLoad.current = true
      trackPageLoad(Math.round(performance.now()))
    }
  }, [trackPageLoad])
}

function useTrackPageView(gaTrackingId?: string) {
  const location = useLocation()
  const { trackPageView } = useUserInteraction()
  const currentPage = useRef('')

  /**
   * Amplitude tracking
   */
  useEffect(() => {
    if (currentPage.current !== location.pathname) {
      currentPage.current = location.pathname
      trackPageView()
    }
  }, [location.pathname, trackPageView])

  /**
   * GA tracking
   */
  useEffect(() => {
    if (gaTrackingId?.length) {
      pageview(location.pathname, gaTrackingId)
    }
  }, [location, gaTrackingId])
}

function App() {
  const { appVersion, gaTrackingId } = useLoaderData<typeof loader>()
  const [theme] = useTheme()
  useTrackPageLoad()
  useTrackPageView(gaTrackingId)

  return (
    <html className="h-full" lang="en">
      <head>
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            console.log(
              '\\n\\n\\n\\n',
              'Diving deep into my code? Everything you see here is hosted on GitHub :)',
              '\\n',
              'You can also reach out to me in any of the following links:',
              '\\n\\n',
              '${[...socialListItems]
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((item) => `- ${item.name}: ${item.url}`)
                .join('\\n ')}',
              '\\n\\n',
              'Hemerson Carlin 👋🏼',
              '\\n\\n\\n\\n\\n',
            )
            `,
          }}
          type="text/javascript"
        />
      </head>
      <body className={clsx('h-full', theme)}>
        {gaTrackingId ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        ) : null}
        <Layout appVersion={appVersion}>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default function AppWithProvider() {
  const { theme } = useLoaderData<typeof loader>()

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}
