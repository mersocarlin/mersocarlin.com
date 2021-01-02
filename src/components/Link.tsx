import React from 'react'
import NextLink from 'next/link'

interface Link {
  as?: string
  children: React.ReactNode
  colorStyles?: string
  fontStyles?: string
  hoverStyles?: string
  href: string
  target?: string
}

export default function Link({
  as,
  children,
  colorStyles = 'text-red-600 hover:text-red-800 visited:text-red-800',
  fontStyles = '',
  hoverStyles = 'hover:underline',
  href,
  target,
}: Link) {
  const isInternal = href.startsWith('/')

  if (isInternal) {
    return (
      <NextLink as={as} href={href}>
        <a className={`${colorStyles} ${fontStyles} ${hoverStyles}`}>
          {children}
        </a>
      </NextLink>
    )
  }

  return (
    <a
      className={`${colorStyles} ${fontStyles} ${hoverStyles}`}
      href={href}
      rel="noopener noreferrer"
      target={target}
    >
      {children}
    </a>
  )
}
