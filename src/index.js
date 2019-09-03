import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './router/index.js';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import reducer from './page/reducer/index';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    < AppRouter / >
  </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();