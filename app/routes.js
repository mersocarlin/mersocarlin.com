
import React from 'react';
import { Route, DefaultRoute } from 'react-router';


import MersoCarlin from './containers/mersocarlin';


export default (
  <Route path="/" handler={MersoCarlin}>
    <DefaultRoute handler={MersoCarlin}/>
  </Route>
);
