import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";

import reducer from "./page/reducer/index";
import AppRouter from "./router/index";
import thunkMiddleware from "./thunkMiddleware";
import * as serviceWorker from "./serviceWorker";

/**
 * 官方自带的操作显示工具
 */
const loggerMiddleware = createLogger();

// const logger = store => next => action => {
//   console.log("dispatching", action);
//   const result = next(action);
//   console.log("next state", store.getState());
//   return result;
// };

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
