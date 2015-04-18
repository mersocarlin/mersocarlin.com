/**
 *
 */
import Router from 'react-router';


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
};
