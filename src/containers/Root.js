// @flow
import React from 'react'
import { compose, lifecycle } from 'recompose'
import { connect, Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import logPageView from '../analytics'
import IntlProvider from './intl-provider'
import Main from './Main'

type PropsT = {
  history: any,
  store: any,
}

function Root({ history, store }: PropsT) {
  return (
    <Provider store={store}>
      <IntlProvider>
        <ConnectedRouter history={history}>
          <Main />
        </ConnectedRouter>
      </IntlProvider>
    </Provider>
  )
}

const getPathName = routing =>
  routing.location ? routing.location.pathname : '/'

export default compose(
  connect(state => ({
    routing: state.routing,
  })),
  lifecycle({
    componentDidMount() {
      logPageView('/')
    },
    componentWillReceiveProps({ routing }) {
      const currentLocation = getPathName(this.props.routing)
      const nextLocation = getPathName(routing)

      if (currentLocation !== nextLocation) {
        logPageView(nextLocation)
      }
    },
  })
)(Root)
