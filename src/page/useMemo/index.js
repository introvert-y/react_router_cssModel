import React, { useState, useMemo } from "react";

export default function UseMemoPage() {
	const [count, setCount] = useState(0);
	const expensive = useMemo(() => {
		console.log("compute");
		let sum = 0;
		for (let i = 0; i <= count; i += 1) {
			sum += i;
		}
		return sum;
		// 只有count变化，这⾥里里才重新执⾏行行
	}, [count]);
	const [value, setValue] = useState("");
	return (
		<div>
			<h3>UseMemo返回一个值</h3>
			<h4>推荐阅读：https://www.jianshu.com/p/9af1c9c3a02b</h4>
			<p>
				expensive:
				{expensive}
			</p>
			<p>{count}</p>
			<button type="button" onClick={() => setCount(count + 1)}>
				add
			</button>
			<input value={value} onChange={event => setValue(event.target.value)} />
		</div>
	);
}
