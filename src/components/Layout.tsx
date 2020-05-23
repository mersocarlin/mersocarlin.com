import React from 'react'
import styled from 'styled-components'

import { initGA, trackPageView } from '../utils/analytics'
import Link from './Link'
import ThemeSwitcher from './ThemeSwitcher'

interface LayouProps {
  children: React.ReactNode
  fullHeight?: boolean
  gaId: string
}

const Main = styled.div`
  min-height: 100vh; /* cover the 100% of viewport */
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 100rem; /* footer height */
`

const StyledHeader = styled.header`
  align-items: center;
  background: var(--background-main-level1);
  box-shadow: var(--box-shadow-1);
  display: flex;
  font-size: 16rem;
  height: 50rem;
  justify-content: space-between;
  padding: 0 var(--padding-large);

  a {
    color: var(--background-text);

    :hover {
      color: var(--background-text);
      text-decoration: underline;
    }
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: var(--padding-large);
  }
`

const LayoutContent = styled.section`
  margin: var(--padding-xlarge) 0;
  width: auto;

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 768px;
  }

  @media (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
    width: 1024px;
  }

  &[data-fullheight='true'] {
    @media (min-width: 768px) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`

const StyledFooter = styled.footer`
  align-items: center;
  background-color: var(--footer-background);
  color: var(--footer-text);
  bottom: 0;
  display: flex;
  font-size: 14rem;
  height: 100rem;
  justify-content: center;
  position: absolute;
  width: 100%;
`

export default function Layout({ children, fullHeight, gaId }: LayouProps) {
  React.useEffect(() => {
    initGA(gaId)
    trackPageView(`${window.location.pathname}${window.location.search}`)
  }, [])

  return (
    <Main>
      <StyledHeader>
        <Link href="/">@mersocarlin</Link>

        <Menu>
          <Link href="/blog">Blog</Link>
          <ThemeSwitcher />
        </Menu>
      </StyledHeader>

      <LayoutContent data-fullheight={Boolean(fullHeight)}>
        {children}
      </LayoutContent>

      <StyledFooter>
        {`Hemerson Carlin © 2010 — ${new Date().getFullYear()}`}
      </StyledFooter>
    </Main>
  )
}
