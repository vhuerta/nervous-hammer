/**
 * App entry point, this file mounts the react APP on the div
 * #root
 *
 * @author Victor Huerta <vhuertahnz@gmail.com>
 */

import React from 'react';
import {render} from 'react-dom';
import Root from './components/Root';

import {createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware(),
  loggerMiddleware,
);
const store = createStore(reducers, composeEnhancers(middlewares));

// let fakeAuth = {username: 'fake', password: 'fake_password'};
// store.dispatch(actions.auth.authenticate(fakeAuth));

// fakeAuth = {username: 'vhuertahnz@gmail.com', password: 'admin'};
// store.dispatch(actions.auth.authenticate(fakeAuth));

render(<Root store={store} />, document.getElementById('root'));
