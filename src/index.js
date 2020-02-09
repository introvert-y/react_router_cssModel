import React from "react";

import ReactDOM from "react-dom";
import "./index.css";

import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";

import reducer from "./page/reducer/index";
import AppRouter from "./router/index";
import thunkMiddleware from "./thunkMiddleware";

/**
 * 官方自带的操作显示工具
 */
const loggerMiddleware = createLogger();

const logger = store => next => action => {
	console.log("dispatching", action);
	const result = next(action);
	console.log("next state", store.getState());
	return result;
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
	<Provider store={store}>
		<AppRouter />
	</Provider>,
	document.getElementById("root")
);
