import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import App from './containers/app';
import Root from './containers/root';

import 'jquery';
import 'semantic-ui-css/semantic.js';
import 'semantic-ui-css/semantic.css';
import './styles/animate.css';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

render(
  <Root store={store}>
    <App />,
  </Root>,
  document.getElementById('root')
);
