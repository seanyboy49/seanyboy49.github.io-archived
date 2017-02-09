import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import promise from 'redux-promise'


import App from './components/app'
import Navigation from './components/Navigation'

const routes = (
  <Route path="/" component={Navigation}>

  </Route>
)

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router
      history={browserHistory}
      routes={routes}
       />
  </Provider>
  , document.getElementById('root'),
);
