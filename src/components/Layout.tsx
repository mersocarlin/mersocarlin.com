import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import { initGA, trackPageView } from '../utils/analytics'
import Meta from './Meta'

interface LayouProps {
  children: React.ReactNode
  gaId: string
  title?: string
}

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  font-size: 14rem;
  height: 20rem;
  justify-content: center;
  width: 100%;
`

export default function Layout({
  children,
  gaId,
  title = 'Hemerson Carlin | About Page',
}: LayouProps) {
  React.useEffect(() => {
    initGA(gaId)
    trackPageView(`${window.location.pathname}${window.location.search}`)
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />

        <Meta title={title} />
      </Head>

      {children}

      <StyledFooter>{`© ${new Date().getFullYear()} Hemerson Carlin. All rights reserved.`}</StyledFooter>
    </React.Fragment>
  )
}
