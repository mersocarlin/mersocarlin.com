// @flow
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu as SemanticMenu } from 'semantic-ui-react'

import { withIntl } from '../../higher-order'
import { Icon } from '../index'
import FlagMenu from './FlagMenu'

import type { IntlT } from '../../types'

type PropsT = {
  intl: IntlT,
  locale: string,
  onClick: (path: string) => void,
  onLocaleChange: (locale: string) => void,
}

function Menu({ intl, locale, onLocaleChange }: PropsT) {
  const menuItems = [
    {
      name: intl.formatMessage({ id: 'menu.home' }),
      icon: 'home',
      to: '/',
    },
    {
      name: intl.formatMessage({ id: 'menu.contact' }),
      icon: 'mail',
      to: '/contact',
    },
  ]

  return (
    <SemanticMenu pointing secondary>
      <SemanticMenu.Menu position="right">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            exact={item.to === '/'}
            className="item"
            to={item.to}
          >
            <Icon icon={item.icon} />
            {item.name}
          </NavLink>
        ))}

        <FlagMenu value={locale} onChange={onLocaleChange} />
      </SemanticMenu.Menu>
    </SemanticMenu>
  )
}

export default withIntl(Menu)
