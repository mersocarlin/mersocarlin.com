import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useFetcher } from '@remix-run/react'

export type Theme = 'dark' | 'light'

const themes: Array<Theme> = ['dark', 'light']

export function isTheme(theme: string | null) {
  return themes.includes(theme as Theme)
}

const prefersLightMQ = '(prefers-color-scheme: light)'
const getPreferredTheme = (): Theme =>
  window.matchMedia(prefersLightMQ).matches ? 'light' : 'dark'

type ThemeContextType = [
  Theme | null,
  React.Dispatch<React.SetStateAction<Theme | null>>
]

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export default function ThemeProvider({
  children,
  theme: themeProp,
}: {
  children: React.ReactNode
  theme: Theme | null
}) {
  const [theme, setThemeState] = useState<Theme | null>(() => {
    if (themeProp) {
      if (themes.includes(themeProp)) {
        return themeProp
      }

      return null
    }

    if (typeof window !== 'object') {
      return null
    }

    return getPreferredTheme()
  })

  const persistTheme = useFetcher()

  const persistThemeRef = useRef(persistTheme)
  useEffect(() => {
    persistThemeRef.current = persistTheme
  }, [persistTheme])

  useEffect(() => {
    const mediaQuery = window.matchMedia(prefersLightMQ)
    const handleChange = () => {
      setThemeState(mediaQuery.matches ? 'light' : 'dark')
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const setTheme = useCallback(
    (cb: Parameters<typeof setThemeState>[0]) => {
      const newTheme = typeof cb === 'function' ? cb(theme) : cb
      if (newTheme) {
        persistThemeRef.current.submit(
          { theme: newTheme },
          { action: 'action/set-theme', method: 'post' }
        )
      }
      setThemeState(newTheme)
    },
    [theme]
  )

  const value: ThemeContextType = useMemo(
    () => [theme, setTheme],
    [setTheme, theme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
