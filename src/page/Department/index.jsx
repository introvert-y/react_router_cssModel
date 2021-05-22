import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Drawer, Button } from "antd";
import styled from "styled-components";
// import config from '../../../../config';
// import req from '../../../../req';
import DepartmentItem from "./Item";

const StyledManagerDrawer = styled(Drawer)`
	.ant-drawer-wrapper-body {
		overflow: hidden;
		height: 100%;
		padding-bottom: 110px;
	}
	.group_name {
		color: rgba(33, 39, 50, 0.85);
		font-size: 14px;
		font-weight: bold;
		padding: 10px 0;
	}
	.footer {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 100%;
		border-top: 1px solid #e9e9e9;
		padding: 10px 16px;
		background: #fff;
		text-align: center;
	}
`;
const mockList = [
	{
		departmentId: "a51f03833b5611eb8d7b52540023cd6c",
		departmentName: "材料部",
		childDepartment: []
	},
	{
		departmentId: "bde697b73b5611eb8d7b52540023cd6c",
		departmentName: "安全部",
		childDepartment: []
	},
	{
		departmentId: "e6fecca33b5611eb8d7b52540023cd6c",
		departmentName: "设计部材料部材料部材料部材料部材料部",
		childDepartment: [
			{
				departmentId: "0f2f01653b5711eb8d7b52540023cd6c",
				departmentName: "设计研究院",
				childDepartment: []
			},
			{
				departmentId: "aca7d23c3b8a11eb8d7b52540023cd6c",
				departmentName: "交互设计部",
				childDepartment: []
			}
		]
	}
];
const mockCountMap = {
	"0f2f01653b5711eb8d7b52540023cd6c": 2,
	a51f03833b5611eb8d7b52540023cd6c: 5,
	aca7d23c3b8a11eb8d7b52540023cd6c: 0,
	bde697b73b5611eb8d7b52540023cd6c: 4,
	e6fecca33b5611eb8d7b52540023cd6c: 5,
	e805ea123ec911eb8d7b52540023cd6c: 1,
	ed4e7fd13b6211eb8d7b52540023cd6c: 4,
	f4098c183b5611eb8d7b52540023cd6c: 3
};
function Page({ status, onCloseFn }) {
	const [list, setList] = useState([]);
	const [departmentCountMap, setDepartmentCountMap] = useState(null);
	/**
	 * 获取部门
	 */
	const getList = useCallback(() => {
		// req.department.showAllDepartmentTree({ companyId })
		// .then((res) => {
		//   if (res.code) {
		//     req.err.show(res.msg);
		//     return;
		//   }
		//   setList(res.data.list);
		//   setDepartmentCountMap(res.data.departmentCountMap);
		// })
		// .catch(req.err.show);
		setList(mockList);
		setDepartmentCountMap(mockCountMap);
	});
	useEffect(() => {
		getList();
	});
	return (
		<StyledManagerDrawer
			title="部门管理"
			width={424}
			visible={status}
			bodyStyle={{ overflow: "auto", height: "100%" }}
			onClose={onCloseFn}
		>
			{list.map((item, index) => (
				<DepartmentItem
					info={item}
					key={item.departmentId}
					isLast={index === list.length - 1}
					departmentCountMap={departmentCountMap}
					hasDelete
				/>
			))}
			<div className="footer">
				<Button type="primary">新增部门</Button>
			</div>
		</StyledManagerDrawer>
	);
}
Page.propTypes = {
	status: PropTypes.bool.isRequired,
	onCloseFn: PropTypes.func.isRequired
};

export default Page;
