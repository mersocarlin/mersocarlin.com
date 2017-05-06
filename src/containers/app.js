import React from 'react'
import PropTypes from 'prop-types'
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import moment from 'moment'

import { Icon, Menu } from '../components'

import { I18nActionCreators } from '../actions'
import { withIntl, withNavigation } from '../higher-order'

import './app.scss'

const App = ({ children, i18n, intl, location, onLocaleChange, onMenuItemClick }) => (
  <div className="app-mersocarlin">
    <Menu
      locale={i18n.flag}
      onLocaleChange={onLocaleChange}
      onMenuItemClick={onMenuItemClick}
      pathname={location.pathname}
    />
    <div className="page-mersocarlin">
      {children}
    </div>
    <div className="ui footer container">
      <Icon icon="copyright" />
      {moment().year()} {intl.formatMessage({ id: 'application.copy' })}
    </div>
  </div>
)

App.propTypes = {
  children: PropTypes.any.isRequired,
  i18n: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  onLocaleChange: PropTypes.func.isRequired,
  onMenuItemClick: PropTypes.func.isRequired,
}

export default compose(
  withIntl,
  withNavigation,
  connect(state => ({
    i18n: state.i18n,
  }), {
    updateLocale: I18nActionCreators.updateLocale,
  }),
  withHandlers({
    onLocaleChange: ({ updateLocale }) => locale => updateLocale(locale),
    onMenuItemClick: ({ navigateTo }) => location => navigateTo(location),
  }),
)(App)
