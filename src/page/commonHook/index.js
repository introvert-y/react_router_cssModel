import { useState, useEffect, useCallback } from "react";

function useWinSize() {
	const [size, setSize] = useState({});

	const onResize = useCallback(() => {
		setSize({
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		});
	}, []);

	useEffect(() => {
		window.addEventListener("resize", onResize);
		return () => {
			console.log("remove");
			window.removeEventListener("resize", onResize);
		};
	});
	return size;
}
export default useWinSize;
