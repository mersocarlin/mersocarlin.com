import SocialList from './SocialList'
import Menu from './Menu'
import HeaderLink from './HeaderLink'

import type { PropsWithChildren } from 'react'

export default function Layout({
  appVersion,
  children,
}: PropsWithChildren & {
  appVersion: string
}) {
  return (
    <div className="flex flex-col min-h-full bg-gray-50 dark:bg-gray-800">
      <header className="mersocarlin-bg-white p-3 shadow-md fixed top-0 left-0 right-0 z-10">
        <nav className="flex items-center justify-between">
          <HeaderLink fontStyles="text-base" to="/">
            <span className="font-light uppercase">Hemerson</span>
            <span className="font-semibold uppercase">Carlin</span>
          </HeaderLink>

          <Menu />
        </nav>
      </header>

      <main className="flex-1 my-8 m-auto w-full lg:max-w-screen-lg md:max-w-screen-md mt-20 font-light text-lg">
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
