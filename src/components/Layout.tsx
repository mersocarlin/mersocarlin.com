import React from 'react'
import styled from 'styled-components'

import { initGA, trackPageView } from '@mersocarlin.com/utils/analytics'

import Link from './Link'
import SocialList from './SocialList'
import ThemeSwitcher from './ThemeSwitcher'

interface LayouProps {
  appVersion: string
  centerContent?: boolean
  children: React.ReactNode
  gaId: string
}

const Main = styled.div`
  min-height: 100vh; /* cover the 100% of viewport */
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 6.25rem; /* footer height */
`

const StyledHeader = styled.header`
  align-items: center;
  background: var(--background-main-level1);
  box-shadow: var(--box-shadow-1);
  display: flex;
  font-size: 1rem;
  height: 3.125rem;
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

  &[data-centercontent='true'] {
    @media (min-width: 468px) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`

const StyledFooter = styled.footer`
  align-items: center;
  background: var(--background-main-level1);
  box-shadow: var(--box-shadow-1);
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  height: 6.25rem;
  justify-content: center;
  position: absolute;
  width: 100%;
  padding: 0;

  .copyright {
    margin-bottom: var(--padding-large);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 2rem;
    justify-content: space-between;

    .copyright {
      margin: 0;
    }
  }
`

export default function Layout({
  appVersion,
  centerContent,
  children,
  gaId,
}: LayouProps) {
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

      <LayoutContent data-centercontent={Boolean(centerContent)}>
        {children}
      </LayoutContent>

      <StyledFooter>
        <div className="copyright">
          {`Hemerson Carlin © ${new Date().getFullYear()} - v${appVersion}`}
        </div>

        <SocialList />
      </StyledFooter>
    </Main>
  )
}
