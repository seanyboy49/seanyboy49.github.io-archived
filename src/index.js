import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import promise from 'redux-promise'

import Navigation from './components/Navigation'
import Developer from './components/Developer'
import App from './components/app'


const routes = (
  <Route path="/" component={Navigation}>
    <IndexRoute component={Developer} />
  </Route>
);

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'),
);
