import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import Home from './containers/home';


export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Route>
);
