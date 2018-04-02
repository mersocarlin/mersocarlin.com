import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './containers/app'
import Root from './containers/root'
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'

import 'animate.css/animate.css'
import 'semantic-ui-css/semantic.min.css'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Root history={history} store={store}>
    <App />
  </Root>,
  document.getElementById('root')
)

registerServiceWorker()
