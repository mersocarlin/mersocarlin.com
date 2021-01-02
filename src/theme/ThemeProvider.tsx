import React from 'react'

import useLocalStorage from '@mersocarlin.com/hooks/useLocalStorage'

interface ThemeContextProps {
  onUpdateTheme: (theme: string) => void
  theme: string
}

const ThemeContext = React.createContext<ThemeContextProps | undefined>(
  undefined,
)

interface ThemeProviderProps {
  children: React.ReactNode
}

const supportedThemes = ['dark', 'light']

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useLocalStorage('mersocarlin:theme', 'light')

  const setBodyCssClass = React.useCallback((theme: string) => {
    const body = document.querySelector('body')
    if (body && supportedThemes.includes(theme)) {
      supportedThemes.forEach((themeName) => {
        body.classList.remove(themeName)
      })
      body.classList.add(theme)
      setTheme(theme)
    }
  }, [])

  const onUpdateTheme = React.useCallback((newTheme: string) => {
    setBodyCssClass(newTheme)
  }, [])

  React.useEffect(() => {
    setBodyCssClass(theme)
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        onUpdateTheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
