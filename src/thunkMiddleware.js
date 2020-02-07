const thunkMiddleware = store => next => action => {
	console.log("拦截了");
	if (action.type === "changeName") {
		setTimeout(() => {
			store.dispatch({ type: "setName", name: "炎黄子孙" });
		}, 3000);
	}
	next(action);
};

export default thunkMiddleware;
