/*eslint-disable no-unused-vars*/
import React from 'react';
import createReactClass from 'create-react-class';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import LoginContainer from './../../containers/auth/LoginContainer';
import Recover from './Recover';
import Reset from './Reset';

const Auth = createReactClass({
  render() {
    let url = this.props.match.url;
    url = url.replace(/\/$/, '');
    return (
      <Switch>
        <Route exact path={`${url}/login`} component={LoginContainer} />
        <Route exact path={`${url}/recover`} component={Recover} />
        <Route exact path={`${url}/reset/:token`} component={Reset} />
        <Route>
          <Redirect to={`${url}/login`} />
        </Route>
      </Switch>
    );
  },
});

export default Auth;
