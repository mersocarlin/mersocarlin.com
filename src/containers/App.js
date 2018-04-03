// @flow
import React from 'react'
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import moment from 'moment'

import { Icon, Menu } from '../components'

import { I18nActionCreators } from '../actions'
import { withIntl } from '../higher-order'
import type { i18nReducerT, IntlT } from '../types'

import './App.css'

type PropsT = {
  children: React$Element<*>,
  i18n: i18nReducerT,
  intl: IntlT,
  onLocaleChange: (locale: string) => void,
}

function App({ children, i18n, intl, onLocaleChange }: PropsT) {
  return (
    <div className="app-mersocarlin">
      <Menu locale={i18n.flag} onLocaleChange={onLocaleChange} />

      <div className="page-mersocarlin">{children}</div>

      <div className="ui footer container">
        <Icon icon="copyright" />
        {moment().year()} {intl.formatMessage({ id: 'application.copy' })}
      </div>
    </div>
  )
}

export default compose(
  withIntl,
  connect(
    state => ({
      i18n: state.i18n,
    }),
    {
      updateLocale: I18nActionCreators.updateLocale,
    }
  ),
  withHandlers({
    onLocaleChange: ({ updateLocale }) => locale => updateLocale(locale),
  })
)(App)
