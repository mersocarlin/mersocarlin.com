import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { compose, lifecycle, withHandlers } from 'recompose'
import classNames from 'classnames'
import $ from 'jquery'

import FlagMenu from './flag-menu'
import Icon from './icon'

import { withIntl } from '../higher-order'

const Menu = ({ intl, locale, onClick, onLocaleChange, pathname }) => {
  const menuItems = [{
    name: intl.formatMessage({ id: 'menu.home' }),
    icon: 'home',
    to: '/',
    active: [/^\/$/].some(path => path.test(pathname)),
  }, {
    name: intl.formatMessage({ id: 'menu.contact' }),
    icon: 'call',
    to: '/contact',
    active: [/^\/contact$/].some(path => path.test(pathname)),
  }]

  return (
    <div className="ui segment top-menu">
      <div className="ui secondary pointing menu">
        <div className="right menu">
          {
            menuItems.map(item => (
              <Link
                key={item.icon}
                onClick={() => onClick(item.to)}
                className={classNames('item', { active: item.active })}
              >
                <Icon icon={item.icon} />
                {item.name}
              </Link>
            ))
          }
        </div>
        <FlagMenu
          value={locale}
          onChange={onLocaleChange}
        />
      </div>
    </div>
  )
}

Menu.propTypes = {
  intl: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onLocaleChange: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
}

export default compose(
  withIntl,
  withHandlers({
    onClick: ({ onMenuItemClick }) => location => onMenuItemClick(location),
  }),
  lifecycle({
    componentDidMount () {
      $('.ui.dropdown').dropdown()
    },
  }),
)(Menu)
