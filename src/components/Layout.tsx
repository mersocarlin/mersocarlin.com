import React from 'react'
import styled from 'styled-components'

import { initGA, trackPageView } from '../utils/analytics'
import Meta from './Meta'
import ThemeSwitcher from './ThemeSwitcher'

interface LayouProps {
  children: React.ReactNode
  gaId: string
  title?: string
}

const StyledHeader = styled.header`
  align-items: center;
  background: var(--background-main-level1);
  box-shadow: var(--box-shadow-1);
  display: flex;
  font-size: 16rem;
  height: 50rem;
  justify-content: space-between;
  padding: 0 var(--padding-large);
`

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  font-size: 14rem;
  height: 20rem;
  justify-content: center;
  width: 100%;
`

export default function Layout({ children, gaId, title }: LayouProps) {
  React.useEffect(() => {
    initGA(gaId)
    trackPageView(`${window.location.pathname}${window.location.search}`)
  }, [])

  return (
    <React.Fragment>
      <Meta title={title} />

      <StyledHeader>
        <div>@mersocarlin</div>
        <div>
          <ThemeSwitcher />
        </div>
      </StyledHeader>

      {children}

      <StyledFooter>{`© ${new Date().getFullYear()} Hemerson Carlin. All rights reserved.`}</StyledFooter>
    </React.Fragment>
  )
}
