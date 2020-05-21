import React from 'react'
import styled from 'styled-components'

import { useTheme } from '../theme/ThemeProvider'

const Main = styled.div`
  cursor: pointer;
`

export default function ThemeSwitcher() {
  const { onUpdateTheme, theme } = useTheme()

  return (
    <Main onClick={() => onUpdateTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <span>☀️</span> : <span>🌑</span>}
    </Main>
  )
}
