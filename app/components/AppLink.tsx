import React from 'react'
import type { PropsWithChildren } from 'react'
import { Link } from '@remix-run/react'

export default function AppLink({
  as,
  children,
  className = '',
  colorStyles = 'mersocarlin-text-primary hover:text-red-800 visited:text-red-600 dark:hover:text-red-300 dark:visited:text-red-400',
  fontStyles = '',
  hoverStyles = 'hover:underline',
  href,
  onClick,
  target,
  title,
}: PropsWithChildren & {
  as?: string
  className?: string
  colorStyles?: string
  fontStyles?: string
  hoverStyles?: string
  href: string
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void
  target?: '_blank'
  title?: string
}) {
  const isInternal = href.startsWith('/')

  if (isInternal) {
    return (
      <Link
        to={href}
        className={`${colorStyles} ${fontStyles} ${hoverStyles} ${className}`}
        onClick={onClick}
        itemProp="url"
      >
        {children}
      </Link>
    )
  }

  return (
    <a
      className={`${colorStyles} ${fontStyles} ${hoverStyles} ${className}`}
      href={href}
      itemProp="url"
      onClick={onClick}
      rel="noopener noreferrer"
      target={target}
      title={title}
    >
      {children}
    </a>
  )
}
