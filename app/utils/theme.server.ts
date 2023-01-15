import { createCookieSessionStorage } from '@remix-run/node'
import invariant from 'tiny-invariant'

import type { Theme } from '~/providers/ThemeProvider'
import { isTheme } from '~/providers/ThemeProvider'

invariant(process.env.SESSION_SECRET, 'SESSION_SECRET must be set')

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: 'mersocarlin_theme',
    secure: true,
    secrets: [process.env.SESSION_SECRET],
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
  },
})

export async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get('Cookie'))

  return {
    getTheme: () => {
      const themeValue = session.get('theme')
      return isTheme(themeValue) ? themeValue : 'dark'
    },
    setTheme: (theme: Theme) => session.set('theme', theme),
    commit: () =>
      themeStorage.commitSession(session, { expires: new Date('2050-01-01') }),
  }
}
