/**
 *
 */
import 'babel/register';

import React from 'react';
import FastClick from 'fastclick';

import routes from '../app/routes';
import router from '../app/utils/router';

//import '../app/main.scss';


(() => {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);

    React.initializeTouchEvents(true);
    router.create(routes);
    router.run((Handler, state) => {
      state.routes.filter((route) => {
        return route.handler.routeAction;
      }).forEach((route) => {
        route.handler.routeAction(state.params);
      });

      React.render(<Handler params={state.params} />, document.body);
    });
  });
})();
