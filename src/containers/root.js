import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import IntlProvider from './intl-provider'
import logPageView from '../analytics'
import routes from '../routes'

const Root = ({ history, store }) => (
  <Provider store={store}>
    <IntlProvider>
      <Router
        history={history}
        children={routes}
        onUpdate={logPageView}
      />
    </IntlProvider>
  </Provider>
)

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
}

export default Root
