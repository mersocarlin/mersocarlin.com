import { Link } from '@remix-run/react'

type Props = JSX.IntrinsicElements['a'] & {
  colorStyles?: string
  fontStyles?: string
  hoverStyles?: string
}

export default function AppLink({
  children,
  className = '',
  colorStyles = 'mersocarlin-text-primary hover:text-red-800 visited:text-red-600 dark:hover:text-red-300 dark:visited:text-red-400',
  fontStyles = '',
  hoverStyles = 'hover:underline',
  href = '',
  onClick,
  target,
  title,
  ...rest
}: Props) {
  const isInternal = href.startsWith('/')

  if (isInternal) {
    return (
      <Link
        className={`${colorStyles} ${fontStyles} ${hoverStyles} ${className}`}
        itemProp="url"
        onClick={onClick}
        to={href}
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
      target={target || '_blank'}
      title={title}
      {...rest}
    >
      {children}
    </a>
  )
}
