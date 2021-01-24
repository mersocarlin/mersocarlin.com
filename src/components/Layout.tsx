import React from 'react'
import { useRouter } from 'next/router'

import { initGA, trackPageView } from '@mersocarlin.com/utils/analytics'

import SocialList from './SocialList'
import Menu from './Menu'
import HeaderLink from './HeaderLink'

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
    trackPageView(router.asPath)
  }, [])

  return (
    <div
      className={`flex flex-col bg-gray-50 dark:bg-gray-800 ${
        centerContent ? 'h-full' : ''
      }`}
    >
      <header className="mersocarlin-bg-white p-3 shadow-md fixed top-0 left-0 right-0 z-10">
        <nav className="flex items-center justify-between">
          <HeaderLink fontStyles="text-base" path="/">
            <span className="font-light uppercase">Hemerson</span>
            <span className="font-semibold uppercase">Carlin</span>
          </HeaderLink>

          <Menu />
        </nav>
      </header>

      <main className="flex-1 my-8 m-auto w-full lg:max-w-screen-lg md:max-w-screen-md mt-20">
        {children}
      </main>

      <footer className="mersocarlin-bg-white mersocarlin-text-gray flex items-center justify-between flex-col md:flex-row p-3 border-t-2 dark:border-gray-500">
        <div className="mb-4 md:mb-0">
          {`Hemerson Carlin © ${new Date().getFullYear()} - v${appVersion}`}
        </div>

        <SocialList />
      </footer>
    </div>
  )
}
