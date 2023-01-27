import { useEffect, useState } from 'react'
import { useTheme } from '~/providers/ThemeProvider'
import { MoonIcon, SunIcon } from './Icons'

function ThemeIcon() {
  const [theme] = useTheme()

  return theme === 'dark' ? <SunIcon /> : <MoonIcon />
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = useTheme()
  const [clientLoaded, setClientLoaded] = useState(false)

  useEffect(() => {
    const body = document.querySelector('body')
    if (!body) {
      return
    }

    setClientLoaded(true)
  }, [])

  return (
    <button
      aria-label="Toggle light/dark theme"
      className={`rounded-full bg-gray-300 dark:bg-gray-600 h-8 w-8 focus:outline-none inline-block ${
        clientLoaded ? 'cursor-pointer' : ''
      }`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {clientLoaded ? <ThemeIcon /> : <div className="h-4" />}
    </button>
  )
}
