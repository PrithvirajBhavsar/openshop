import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import {createStore,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk";
import {BrowserRouter as Router} from "react-router-dom";

import combineReducers from "./reducers/combineReducers"

const store = createStore(combineReducers,compose(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

