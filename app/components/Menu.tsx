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

export default function Menu() {
  return (
    <>
      <div className="md:hidden flex items-center space-x-4">
        <ThemeSwitcher />
        <MobileMenu />
      </div>

      <div className="hidden md:flex md:items-center space-x-4">
        {menuItems.map((menuItem) => (
          <HeaderLink key={menuItem.name} to={menuItem.path}>
            {menuItem.name}
          </HeaderLink>
        ))}

        <ThemeSwitcher />
      </div>
    </>
  )
}
