import React from "react";
import useWinSize from "../commonHook/index";

function Example() {
	const size = useWinSize();
	return (
		<>
			<div>
				自定义hook作为公共的逻辑处理，相当于一个函数，返回一个值或对象。 Page size: {size.width} * {size.height}
			</div>
		</>
	);
}

export default Example;
