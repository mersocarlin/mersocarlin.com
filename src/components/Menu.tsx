import React, { Fragment } from 'react'
import HeaderLink from './HeaderLink'

import MobileMenu from './MobileMenu'
import ThemeSwitcher from './ThemeSwitcher'

export const menuItems = [
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Tweets',
    path: '/tweets',
  },
  {
    name: 'Uses',
    path: '/uses',
  },
]

function Menu() {
  return (
    <Fragment>
      <div className="md:hidden flex items-center space-x-4">
        <ThemeSwitcher />
        <MobileMenu />
      </div>

      <div className="hidden md:block flex items-center space-x-4">
        {menuItems.map((menuItem) => (
          <HeaderLink key={menuItem.name} path={menuItem.path}>
            {menuItem.name}
          </HeaderLink>
        ))}

        <ThemeSwitcher />
      </div>
    </Fragment>
  )
}

export default Menu
