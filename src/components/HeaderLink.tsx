import { useRouter } from 'next/router'
import React from 'react'
import Link from './Link'

type Props = {
  children: React.ReactNode
  className?: string
  fontStyles?: string
  path: string
}

function HeaderLink({
  children,
  className = '',
  fontStyles = 'text-sm md:text-base',
  path,
}: Props) {
  const router = useRouter()

  // do not highlight home
  const isActive = path !== '/' && router.pathname === path

  return (
    <Link
      className={`${className} ${isActive ? 'underline' : ''}`}
      fontStyles={fontStyles}
      colorStyles="mersocarlin-text-gray hover:text-gray-600 visited:text-gray-600 dark:hover:text-gray-100 dark:visited:text-gray-100"
      href={path}
    >
      {children}
    </Link>
  )
}

export default HeaderLink
