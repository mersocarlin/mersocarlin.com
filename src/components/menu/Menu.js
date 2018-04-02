// @flow
import React from 'react'
import { Link } from 'react-router'
import { compose, withHandlers } from 'recompose'
import classNames from 'classnames'
import { Menu as SemanticMenu } from 'semantic-ui-react'

import FlagMenu from './FlagMenu'
import Icon from '../icon'
import { withIntl } from '../../higher-order'
import type { IntlT } from '../../types'

type PropsT = {
  intl: IntlT,
  locale: string,
  onClick: (path: string) => void,
  onLocaleChange: (locale: string) => void,
  pathname: string,
}

const Menu = ({ intl, locale, onClick, onLocaleChange, pathname }: PropsT) => {
  const menuItems = [
    {
      name: intl.formatMessage({ id: 'menu.home' }),
      icon: 'home',
      to: '/',
      active: [/^\/$/].some(path => path.test(pathname)),
    },
    {
      name: intl.formatMessage({ id: 'menu.contact' }),
      icon: 'mail',
      to: '/contact',
      active: [/^\/contact$/].some(path => path.test(pathname)),
    },
  ]

  return (
    <SemanticMenu pointing secondary>
      <SemanticMenu.Menu position="right">
        {menuItems.map((item, index) => (
          <Link
            key={item.icon}
            onClick={() => onClick(item.to)}
            className={classNames('item', { active: item.active })}
          >
            <Icon icon={item.icon} />
            {item.name}
          </Link>
        ))}
        <FlagMenu value={locale} onChange={onLocaleChange} />
      </SemanticMenu.Menu>
    </SemanticMenu>
  )
}

export default compose(
  withIntl,
  withHandlers({
    onClick: ({ onMenuItemClick }) => location => onMenuItemClick(location),
  })
)(Menu)
