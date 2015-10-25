import { Router } from 'react-router';

export default {

  transitionTo (route, query) {
    this.props.history.pushState(null, route, query);
  }

};
