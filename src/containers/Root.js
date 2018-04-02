// @flow
import React from 'react'
import { compose, lifecycle } from 'recompose'
import { connect, Provider } from 'react-redux'
import { Router } from 'react-router'

import IntlProvider from './intl-provider'
import logPageView from '../analytics'
import routes from '../routes'

type PropsT = {
  history: any,
  store: any,
}

const Root = ({ history, store }: PropsT) => (
  <Provider store={store}>
    <IntlProvider>
      <Router history={history} children={routes} />
    </IntlProvider>
  </Provider>
)

const getPathName = routing => routing.locationBeforeTransitions.pathname

export default compose(
  connect(state => ({
    routing: state.routing,
  })),
  lifecycle({
    componentDidMount() {
      logPageView(getPathName(this.props.routing))
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
