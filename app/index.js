import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/root';
const createHashHistory = require('history/lib/createHashHistory');


import config from './env/config';
import { initializeGoogleAnalyticsIfNeeded, trackPageView } from './analytics';


import 'jquery';
import 'semantic-ui-css/semantic.js';
import 'semantic-ui-css/semantic.css';
import './styles/animate.css';
import './styles/app.scss';


const history = createHashHistory({
  queryKey: false,
});

history.listen(location => {
  const { googleAnalyticsId } = config;
  initializeGoogleAnalyticsIfNeeded(googleAnalyticsId);
  trackPageView(location.pathname);
});

render(
  <Root history={history} />,
  document.getElementById('main')
);
