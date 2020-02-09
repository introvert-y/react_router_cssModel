import React, { useState, useCallback } from "react";

function Page() {
	const [count, setCount] = useState(1);
	function calculate(count) {
		let sum = 0;
		for (let i = 0; i < count * 100; i += 1) {
			sum += i;
		}
		return sum;
	}
	const expensive = useCallback(calculate(count), [count]);

	return (
		<div>
			<h4>
				{count}-{calculate(count)}
			</h4>
			<div>
				<button type="button" onClick={() => setCount(count + 1)}>
					add
				</button>
			</div>
		</div>
	);
}

export default Page;
