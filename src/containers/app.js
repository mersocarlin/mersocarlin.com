import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import moment from 'moment'

import Icon from '../components/icon'


import { strings } from '../config'
import './app.scss'


export default class App extends Component {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object,
  }

  static defaultProps = {
    children: null,
    location: null,
  }

  renderMenu ({ pathname }) {
    const menuItems = [{
      name: strings.menu.home,
      icon: 'home',
      to: '/',
      active: [/^\/$/].some(path => path.test(pathname)),
    }, {
      name: strings.menu.contact,
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
    const { children, location } = this.props

    return (
      <div className="app-mersocarlin">
        {this.renderMenu(location)}
        <div className="page-mersocarlin">
          {children}
        </div>
        <div className="ui footer container">
          <Icon icon="copyright" />
          {moment().year()} {strings.app.copy}
        </div>
      </div>
    )
  }
}
