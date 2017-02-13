import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import IntlProvider from './intl-provider'
import logPageView from '../analytics'
import routes from '../routes'

const Root = ({ store }) => (
  <Provider store={store}>
    <IntlProvider>
      <Router
        history={browserHistory}
        children={routes}
        onUpdate={logPageView}
      />
    </IntlProvider>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
