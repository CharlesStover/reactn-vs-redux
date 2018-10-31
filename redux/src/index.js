import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

const INITIAL_DEMO_STATE = {
  data: null,
  x: 0
};

const demoReducer = (state = INITIAL_DEMO_STATE, action) => {
  switch (action.type) {

    case 'RECEIVE_DATA':
      return {
        ...state,
        data: action.response
      };

    case 'INCREMENT_X':
      return {
        ...state,
        x: state.x + 1
      };

    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ demo: demoReducer }),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
