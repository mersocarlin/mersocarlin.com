/**
 *
 */
import 'babel/register';

import React from 'react';
import FastClick from 'fastclick';

import routes from '../app/routes';
import router from '../app/utils/router';

import '../app/main.scss';


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

/**
 *




let _router = null;


export default {
  makePath(to, params, query) {
    return _router.makePath(to, params, query);
  },

  makeHref(to, params, query) {
    return _router.makeHref(to, params, query);
  },

  transitionTo(to, params, query) {
    _router.transitionTo(to, params, query);
  },

  replaceWith(to, params, query) {
    _router.replaceWith(to, params, query);
  },

  goBack() {
    return _router.goBack();
  },

  run(render) {
    _router.run(render);
  },

  create (routes) {
    if (_router === null) _router = Router.create({ routes: routes });
    return _router;
  }
};*/
