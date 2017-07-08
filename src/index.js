import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './containers/app'
import Root from './containers/root'
import configureStore from './store/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Root history={history} store={store}>
    <App />
  </Root>,
  document.getElementById('root') // eslint-disable-line
)
