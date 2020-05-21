import React from 'react'
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

export default function Layout({ children, gaId, title }: LayouProps) {
  React.useEffect(() => {
    initGA(gaId)
    trackPageView(`${window.location.pathname}${window.location.search}`)
  }, [])

  return (
    <React.Fragment>
      <Meta title={title} />

      {children}

      <StyledFooter>{`© ${new Date().getFullYear()} Hemerson Carlin. All rights reserved.`}</StyledFooter>
    </React.Fragment>
  )
}
