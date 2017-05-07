// @flow
import React from 'react'
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import moment from 'moment'

import { Icon, Menu } from '../components'

import { I18nActionCreators } from '../actions'
import { withIntl, withNavigation } from '../higher-order'
import type { i18nReducerT, IntlT, LocationT } from '../types'

import './app.scss'

type PropsT = {
  children: React$Element<*>,
  i18n: i18nReducerT,
  intl: IntlT,
  location: LocationT,
  onLocaleChange: (locale: string) => void,
  onMenuItemClick: (location: string) => void,
};

const App = ({ children, i18n, intl, location, onLocaleChange, onMenuItemClick }: PropsT) => (
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
