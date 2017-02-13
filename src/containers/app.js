import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classNames from 'classnames'
import moment from 'moment'
import $ from 'jquery'

import FlagMenu from '../components/flag-menu'
import Icon from '../components/icon'

import { updateLocale } from '../actions/i18n'

import './app.scss'


class App extends Component {
  static contextTypes = {
    intl: PropTypes.object,
  }

  static propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func,
    i18n: PropTypes.object,
    location: PropTypes.object,
  }

  static defaultProps = {
    children: null,
    dispatch: null,
    i18n: null,
    location: null,
  }

  componentDidMount () {
    $('.ui.dropdown').dropdown()
  }

  renderMenu ({ formatMessage }) {
    const { dispatch, i18n, location: { pathname } } = this.props
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
            {
              menuItems.map(item => (
                <Link
                  key={item.icon}
                  to={item.to}
                  className={classNames('item', { active: item.active })}
                >
                  <Icon icon={item.icon} />
                  {item.name}
                </Link>
              ))
            }
          </div>
          <FlagMenu
            value={i18n.flag}
            onChange={locale => dispatch(updateLocale(locale))}
          />
        </div>
      </div>
    )
  }

  render () {
    const { intl } = this.context
    const { children } = this.props

    return (
      <div className="app-mersocarlin">
        {this.renderMenu(intl)}
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

export default connect(state => ({
  i18n: state.i18n,
}))(App)
