import React, { useState, useEffect, useCallback } from "react";

function useWinSize() {
	const [size, setSize] = useState({
		width: document.documentElement.clientWidth,
		height: document.documentElement.clientHeight,
	});

	const onResize = useCallback(() => {
		setSize({
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight,
		});
	}, []);

	useEffect(() => {
		window.addEventListener("resize", onResize);
		return () => {
			window.removeEventListener("resize", onResize);
		};
	});

	return size;
}

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
