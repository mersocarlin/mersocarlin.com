import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import createHashHistory from 'history/createHashHistory'

import Root from './containers/Root'
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'

import 'animate.css/animate.css'
import 'semantic-ui-css/semantic.min.css'

const history = window.history.pushState
  ? createBrowserHistory()
  : createHashHistory()
const store = configureStore(history)

ReactDOM.render(
  <Root history={history} store={store} />,
  document.getElementById('root')
)

registerServiceWorker()
