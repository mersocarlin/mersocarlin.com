import React from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'

interface Link {
  as?: string
  children: React.ReactNode
  href: string
}

const StyledLink = styled.a`
  color: var(--primary-main);
  cursor: pointer;
  font-size: 16rem;
  text-decoration: none;

  :visited {
    color: var(--primary-main);
  }

  :hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }
`

export default function Link({ as, children, href }: Link) {
  return (
    <NextLink as={as} href={href}>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  )
}
