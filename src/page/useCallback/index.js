import React, { useState, useCallback } from "react";

function Page() {
	const [count, setCount] = useState(1);
	const expensive = useCallback(
		count => {
			let sum = 0;
			for (let i = 0; i < count * 100; i += 1) {
				sum += i;
			}
			return sum;
		},
		[count]
	);

	return (
		<div>
			<h4>
				{count}-{expensive(count)}
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
