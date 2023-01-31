import type { PropsWithChildren } from 'react'

import { useLocation } from '@remix-run/react'
import AppLink from './AppLink'

function HeaderLink({
  children,
  className = '',
  fontStyles = 'md:text-base',
  to,
}: PropsWithChildren & {
  className?: string
  fontStyles?: string
  to: string
}) {
  const location = useLocation()

  const isActive =
    to !== '/' &&
    (to === location.pathname || location.pathname.startsWith(`${to}/`))

  return (
    <AppLink
      className={`${className} ${isActive ? 'underline' : ''}`}
      fontStyles={fontStyles}
      colorStyles="mersocarlin-text-gray hover:text-gray-600 visited:text-gray-600 dark:hover:text-gray-100 dark:visited:text-gray-100"
      href={to}
    >
      {children}
    </AppLink>
  )
}

export default HeaderLink
