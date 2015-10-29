import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';


import App from './containers/app';
import Home  from './containers/home';
import ReactLoaders from './containers/react-loaders';


export default (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>

      <Route path="github/react-loaders" component={ReactLoaders} />
    </Route>
  </Router>
);
