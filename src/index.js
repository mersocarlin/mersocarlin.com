import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import 'jquery'
import 'semantic-ui-css/semantic'
import 'semantic-ui-css/semantic.min.css'

import rootReducer from './reducers'
import App from './containers/app'
import Root from './containers/root'

import './styles/animate.css'
import './styles/flags/flags.css'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
)

render(
  <Root store={store}>
    <App />
  </Root>,
  document.getElementById('root'), // eslint-disable-line
)
