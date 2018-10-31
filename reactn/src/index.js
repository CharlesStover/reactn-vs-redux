import React from 'react';
import { addReducer, setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

addReducer('fetchData', () =>
  fetch('index.html')
    .then(response => response.text())
    .then(html => ({
      data: html
    }))
);

addReducer('incrementX', state => ({
  x: state.x + 1
}));

setGlobal({
  data: null,
  x: 0
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
