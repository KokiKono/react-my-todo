import React from 'react';
import {render} from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import reducers from './Reducers';
import { BrowserRouter } from 'react-router-dom';

const history = createHistory();
const middleware = routerMiddleware(history);

const reducer = combineReducers({
  ...reducers,
  router: routerReducer
})

const store = createStore(reducer,applyMiddleware(middleware));

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App}></Route>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
