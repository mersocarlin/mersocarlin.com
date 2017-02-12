import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import moment from 'moment'

import Icon from '../components/icon'

import './app.scss'


export default class App extends Component {
  static contextTypes = {
    intl: PropTypes.object,
  }

  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object,
  }

  static defaultProps = {
    children: null,
    location: null,
  }

  renderMenu ({ formatMessage }, { pathname }) {
    const menuItems = [{
      name: formatMessage({ id: 'menu.home' }),
      icon: 'home',
      to: '/',
      active: [/^\/$/].some(path => path.test(pathname)),
    }, {
      name: formatMessage({ id: 'menu.contact' }),
      icon: 'call',
      to: '/contact',
      active: [/^\/contact$/].some(path => path.test(pathname)),
    }]

    return (
      <div className="ui segment top-menu">
        <div className="ui secondary pointing menu">
          <div className="right menu">
            {menuItems.map((item) => {
              const itemCssClass = classNames('item', { active: item.active })
              return (
                <Link
                  key={item.icon}
                  to={item.to}
                  className={itemCssClass}
                >
                  <Icon icon={item.icon} />
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  render () {
    const { intl } = this.context
    const { children, location } = this.props

    return (
      <div className="app-mersocarlin">
        {this.renderMenu(intl, location)}
        <div className="page-mersocarlin">
          {children}
        </div>
        <div className="ui footer container">
          <Icon icon="copyright" />
          {moment().year()} {intl.formatMessage({ id: 'application.copy' })}
        </div>
      </div>
    )
  }
}
