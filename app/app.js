import React from 'react';
import Router from 'react-router';


import routes from './routes';


import './styles/animate.css';
import './styles/main.scss';

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
//React.render(<App />, document.getElementById('main'));
