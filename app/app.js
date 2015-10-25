import 'babel/register';


import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import createBrowserHistory from 'history/lib/createBrowserHistory';


import routes from './routes';


import './styles/animate.css';
import './styles/app.scss';


(() => {

  let history = createBrowserHistory();

  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);

    //React.initializeTouchEvents(true);
    ReactDOM.render(
      <Router history={history}>{routes}</Router>,
      document.getElementById("main"));
  });
})();
