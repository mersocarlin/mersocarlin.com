import React from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'

interface Link {
  as?: string
  children: React.ReactNode
  className?: string
  href: string
  target?: string
}

const StyledLink = styled.a`
  color: var(--primary-main);
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;

  :visited {
    color: var(--primary-main);
  }

  :hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }
`

export default function Link({
  as,
  children,
  className = '',
  href,
  target,
}: Link) {
  const isInternal = href.startsWith('/')

  if (isInternal) {
    return (
      <NextLink as={as} href={href}>
        <StyledLink className={className}>{children}</StyledLink>
      </NextLink>
    )
  }

  return (
    <StyledLink className={className} href={href} target={target}>
      {children}
    </StyledLink>
  )
}
