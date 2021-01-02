import React from 'react'
import NextLink from 'next/link'

interface Link {
  as?: string
  children: React.ReactNode
  className?: string
  colorStyles?: string
  fontStyles?: string
  hoverStyles?: string
  href: string
  target?: string
  title?: string
}

export default function Link({
  as,
  children,
  className = '',
  colorStyles = 'text-red-600 hover:text-red-800 visited:text-red-800 dark:hover:text-red-500 dark:visited:text-red-500',
  fontStyles = '',
  hoverStyles = 'hover:underline',
  href,
  target,
  title,
}: Link) {
  const isInternal = href.startsWith('/')

  if (isInternal) {
    return (
      <NextLink as={as} href={href}>
        <a
          className={`${colorStyles} ${fontStyles} ${hoverStyles} ${className}`}
        >
          {children}
        </a>
      </NextLink>
    )
  }

  return (
    <a
      className={`${colorStyles} ${fontStyles} ${hoverStyles} ${className}`}
      href={href}
      rel="noopener noreferrer"
      target={target}
      title={title}
    >
      {children}
    </a>
  )
}
