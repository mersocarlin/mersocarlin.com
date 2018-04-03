import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'

const configureStore = (history, preloadedState = {}) => {
  const composeEnhancers =
    process.env.NODE_ENV === 'production'
      ? compose
      : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const reactRouterMiddleware = routerMiddleware(history)
  const middlewares = [reactRouterMiddleware, thunk]

  const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  return store
}

export default configureStore
