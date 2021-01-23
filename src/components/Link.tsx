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
  target?: '_blank'
  title?: string
}

export default function Link({
  as,
  children,
  className = '',
  colorStyles = 'mersocarlin-text-primary hover:text-red-800 visited:text-red-800 dark:hover:text-red-300 dark:visited:text-red-300',
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
          itemProp="url"
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
      itemProp="url"
      rel="noopener noreferrer"
      target={target}
      title={title}
    >
      {children}
    </a>
  )
}
