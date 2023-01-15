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

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
})

export async function loader({ request }: DataFunctionArgs) {
  const themeSession = await getThemeSession(request)

  const data = {
    appVersion: pkg.version,
    theme: themeSession.getTheme(),
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
