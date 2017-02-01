import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import promise from 'redux-promise'

import Navigation from './components/Navigation'
import Developer from './components/Developer'



const routes = (
  <Route path="/" mapMenuTitle="Home" component={Navigation}>
    <IndexRoute component={Developer} />
  </Route>
);

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('root'),
);
