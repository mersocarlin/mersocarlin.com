import React from 'react'

import { useTheme } from '@mersocarlin.com/theme/ThemeProvider'

export default function ThemeSwitcher() {
  const { onUpdateTheme, theme } = useTheme()

  return (
    <div
      className="cursor-pointer"
      onClick={() => onUpdateTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <span>☀️</span> : <span>🌑</span>}
    </div>
  )
}
