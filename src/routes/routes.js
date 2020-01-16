// @flow

import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from '../services/history'
import HomePage from '../components/HomePage'
import ErrorPage from '../components/ErrorPage'

const Routes = () => (
    <Router history={history}>
      <div>
        <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/" component={HomePage} />
            <Route path="/error" component={ErrorPage} />
        </Switch>
      </div>
    </Router>
)

export default Routes;