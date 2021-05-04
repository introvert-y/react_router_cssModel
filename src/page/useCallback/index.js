import React, { useState, useCallback, PureComponent } from "react";
export default function UseCallbackPage(props) {
	const [count, setCount] = useState(0);
	const addClick = useCallback(() => {
		let sum = 0;
		for (let i = 0; i <= count; i++) {
			sum += i;
		}
		return sum;
	}, [count]);
	const [value, setValue] = useState("");
	return (
		<div>
			<h3>UseCallback返回一个fn</h3>
			<div>
				把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized
				版本，该回调函数仅在某个依赖项改变时才会更新。
				<span style={{ fontSize: 20, fontWeight: "bold" }}>
					当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如
					shouldComponentUpdate）的子组件时，它将非常有用。
				</span>
			</div>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>add</button>
			<input value={value} onChange={event => setValue(event.target.value)} />
			<Child addClick={addClick} />
		</div>
	);
}
class Child extends PureComponent {
	render() {
		console.log("child render");
		const { addClick } = this.props;
		return (
			<div>
				<h3>Child</h3>
				<button onClick={() => console.log(addClick())}>add</button>
			</div>
		);
	}
}
