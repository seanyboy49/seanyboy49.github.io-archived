import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import promise from 'redux-promise'


import App from './components/app'
import Navigation from './components/Navigation'
import Developer from './components/Developer'
import Designer from './components/Designer'
import Filmmaker from './components/Filmmaker'
import About from './components/About'


const routes = (
  <Route path="/" component={Navigation}>
    <IndexRoute component={Developer} />
    <Route path="/developer" component={Developer}/>
    <Route path="/designer" component={Designer} />
    <Route path="/filmmaker" component={Filmmaker} />
    <Route path="/about" component={About} />


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
