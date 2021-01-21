import React from 'react'
import { useRouter } from 'next/router'

import { initGA, trackPageView } from '@mersocarlin.com/utils/analytics'

import Link from './Link'
import SocialList from './SocialList'
import ThemeSwitcher from './ThemeSwitcher'

interface LayouProps {
  appVersion: string
  centerContent?: boolean
  children: React.ReactNode
  gaId: string
}

type HeaderLinkProps = {
  children: React.ReactNode
  path: string
}

function HeaderLink({ children, path }: HeaderLinkProps) {
  const router = useRouter()

  // do not highlight home
  const isActive = path !== '/' && router.pathname === path

  return (
    <Link
      className={isActive ? 'underline' : ''}
      colorStyles="mersocarlin-text-gray hover:text-gray-600 visited:text-gray-600 dark:hover:text-gray-100 dark:visited:text-gray-100"
      href={path}
    >
      {children}
    </Link>
  )
}

export default function Layout({
  appVersion,
  centerContent,
  children,
  gaId,
}: LayouProps) {
  const router = useRouter()

  React.useEffect(() => {
    initGA(gaId)
    trackPageView(router.asPath)
  }, [])

  return (
    <div
      className={`flex flex-col bg-gray-50 dark:bg-gray-800 ${
        centerContent ? 'h-screen' : ''
      }`}
    >
      <header className="mersocarlin-bg-white p-3 shadow-md">
        <div className="flex items-center justify-between">
          <HeaderLink path="/">@mersocarlin</HeaderLink>

          <div className="flex items-center space-x-4">
            <HeaderLink path="/blog">Blog</HeaderLink>
            <HeaderLink path="/uses">Uses</HeaderLink>
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <main className="flex-1 my-8 m-auto w-full lg:max-w-screen-lg md:max-w-screen-md">
        {children}
      </main>

      <footer className="mersocarlin-bg-white mersocarlin-text-gray flex items-center justify-between flex-col md:flex-row text-sm p-3 border-t-2 dark:border-gray-500">
        <div className="mb-4 md:mb-0">
          {`Hemerson Carlin © ${new Date().getFullYear()} - v${appVersion}`}
        </div>

        <SocialList />
      </footer>
    </div>
  )
}
