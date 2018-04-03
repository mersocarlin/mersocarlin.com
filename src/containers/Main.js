// @flow
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import App from './app'
import Contact from './Contact'
import Home from './Home'

export default function Main() {
  return (
    <App>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />

        <Redirect to="/" />
      </Switch>
    </App>
  )
}
