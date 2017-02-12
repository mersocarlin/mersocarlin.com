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
    dispatch: PropTypes.func,
    children: PropTypes.any,
    location: PropTypes.object,
  }

  static defaultProps = {
    dispatch: null,
    children: null,
    location: null,
  }

  constructor (context, props) {
    super(context, props)

    this.state = {
      flag: 'gb',
      locale: 'en',
    }
    this.handleFlagClick = this.handleFlagClick.bind(this)
  }

  componentDidMount () {
    $('.ui.dropdown').dropdown()
  }

  handleFlagClick (flag, locale) {
    if (this.state.locale === locale) {
      return
    }

    this.setState({ flag, locale })
    this.props.dispatch(updateLocale(locale))
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
          <FlagMenu value={this.state.flag} onChange={this.handleFlagClick} />
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

export default connect(state => ({
  i18n: state.i18n,
}))(App)
