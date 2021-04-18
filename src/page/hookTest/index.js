import React, { useState } from "react";
// import { Button } from "antd";

import useWinSize from "../commonHook/index";
import Department from "../Department/index";

function Example() {
	const [departmentStatus, setDepartmentStatus] = useState(false);
	const size = useWinSize();
	return (
		<>
			<div>
				自定义hook作为公共的逻辑处理，相当于一个函数，返回一个值或对象。 Page size: {size.width} * {size.height}
			</div>
			{/* <Button
				size="small"
				type="primary"
				style={{ marginRight: 24, padding: "0 12px" }}
				onClick={() => setDepartmentStatus(true)}
			>
				部门管理
			</Button> */}
			<Department status={departmentStatus} onCloseFn={() => setDepartmentStatus(false)} />
		</>
	);
}

export default Example;
