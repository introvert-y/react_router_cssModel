import React, { useState, useMemo } from "react";

function Page() {
	const [count, setCount] = useState(1);
	const expensive = useMemo(() => {
		let sum = 0;
		for (let i = 0; i < count * 100; i += 1) {
			sum += i;
		}
		console.count();
		return sum;
	}, [count]);

	return (
		<div style={{ marginLeft: 40, width: 500 }}>
			推荐阅读：https://www.jianshu.com/p/9af1c9c3a02b
			<h3>
				遵循最佳实践，应该在纯函数上实现memoization。纯函数输入什么就返回什么，不存在副作用。
				记住这个是以空间换速度，所以最好确定你是否值得那么做，有些场景很有必要使用。
				在处理递归函数时，Memoization最有效，使用案例：斐波那契系列(Fibonacci)
				<br />
			</h3>
			<h4>
				{count}-{expensive}
			</h4>
			<div>
				<button type="button" style={{ marginRight: 20 }} onClick={() => setCount(count + 1)}>
					添加
				</button>
				<button type="button" onClick={() => setCount(count - 1)}>
					减少
				</button>
			</div>
		</div>
	);
}

export default Page;
