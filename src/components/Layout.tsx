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

export default function Layout({
  appVersion,
  centerContent,
  children,
  gaId,
}: LayouProps) {
  const router = useRouter()
  React.useEffect(() => {
    initGA(gaId)
    trackPageView(`${window.location.pathname}${window.location.search}`)
  }, [])

  const isBlog = router.pathname === '/blog'

  return (
    <div
      className={`flex flex-col bg-gray-50 dark:bg-gray-800 ${
        centerContent ? 'h-screen' : ''
      }`}
    >
      <header className="mersocarlin-bg-white flex items-center justify-between p-3 shadow-md">
        <Link
          className={isBlog ? 'underline' : ''}
          colorStyles="mersocarlin-text-gray hover:text-gray-600 visited:text-gray-600 dark:hover:text-gray-100 dark:visited:text-gray-100"
          href="/blog"
        >
          Blog
        </Link>

        <Link
          colorStyles="mersocarlin-text-gray hover:text-gray-600 visited:text-gray-600 dark:hover:text-gray-100 dark:visited:text-gray-100"
          href="/"
        >
          @mersocarlin
        </Link>

        <ThemeSwitcher />
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
