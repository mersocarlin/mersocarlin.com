import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import { logPageView } from '../analytics';
import routes from '../routes';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router
      history={browserHistory}
      children={routes}
      onUpdate={logPageView}
    />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
