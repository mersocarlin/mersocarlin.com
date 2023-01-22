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
} from '@remix-run/react'
import clsx from 'clsx'

import pkg from '../package.json'
import Layout from './components/Layout'
import styles from './tailwind.css'
import ThemeProvider, { useTheme } from './providers/ThemeProvider'
import { getThemeSession } from './utils/theme.server'
import { getSocialMeta } from './utils/seo'

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

  const data = {
    appVersion: pkg.version,
    theme: themeSession.getTheme(),
    path: new URL(request.url).pathname,
  }

  return data
}

function App() {
  const { appVersion } = useLoaderData<typeof loader>()

  const [theme] = useTheme()

  return (
    <html className="h-full" lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className={clsx('h-full', theme)}>
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
