import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";

const mapStateToProps = state => ({
	value: state.count,
});

const mapDispatchToProps = {
	onIncreaseClick: () => ({
		type: "increase",
		count: 1,
	}),
	onDecreaseClick: () => ({
		type: "decrease",
		count: 1,
	}),
	changeName: () => ({
		type: "changeName",
	}),
};

function Page({ onIncreaseClick, onDecreaseClick, changeName }) {
	return (
		<div style={{ marginLeft: 50, width: 500 }}>
			{/* <h1>{value}</h1> */}
			<p style={{ fontSize: 20 }}>
				react-redux的异步流实现，是通过拦截派发给reducer的事件实现的，例如派发了一个改变全局状态name的事件，通过拦截执行其他操作，这里用定时器3秒模拟请求操作，请求成功后再派发改变值的事件.这个过程也可以当做获取全局通知消息的过程。
			</p>
			<h3 style={{ marginBottom: 10 }}>可打开控制台查看操作日志</h3>
			<button type="button" onClick={onIncreaseClick}>
				+
			</button>
			<button type="button" style={{ marginLeft: 50 }} onClick={onDecreaseClick}>
				-
			</button>
			<button type="button" style={{ marginLeft: 50 }} onClick={changeName}>
				异步流改变全局状态中的名字
			</button>
		</div>
	);
}

Page.propTypes = {
	onIncreaseClick: PropTypes.func.isRequired,
	onDecreaseClick: PropTypes.func.isRequired,
	changeName: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
