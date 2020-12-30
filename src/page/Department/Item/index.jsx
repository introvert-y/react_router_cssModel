import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import config from '../../../../config';
// import req from '../../../../req';
import foldIcon from "../../../img/icon-fold@3x.png";
import unfoldIcon from "../../../img/icon-unfold@3x.png";
import editIcon from "../../../img/tree-edit@3x.png";
import deleteIcon from "../../../img/tree-clean@3x.png";
import chooseIcon from "../../../img/choose-current@3x.png";

const StyledItem = styled.div`
	height: 50px;
	.icon {
		width: 30px;
		height: 30px;
	}
	.content {
		text-align: right;
		overflow: hidden;
		border-bottom: 1px solid #e6e6e6;
	}
	.name,
	.count {
		font-size: 16px;
		color: rgba(33, 39, 50, 0.85);
	}
	.name {
		white-space: nowrap;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.count {
		margin-left: 4px;
	}
	.choose_icon,
	.edit_icon,
	.delete_icon {
		width: 40px;
		height: 40px;
	}
`;

function Page({ hasDelete, info, selectList, departmentCountMap, space, isLast }) {
	console.log("isLast", isLast, info);
	const [showAll, setShowAll] = useState(false);
	return (
		<>
			<StyledItem data-flex="main:left cross:center" style={{ paddingLeft: space * 28 }}>
				{showAll ? (
					<img className="icon" src={unfoldIcon} alt="" data-flex-box="0" onClick={() => setShowAll(!showAll)} />
				) : (
					<img src={foldIcon} className="icon" data-flex-box="0" alt="" onClick={() => setShowAll(!showAll)} />
				)}
				<div
					className="content"
					data-flex-box="1"
					data-flex="main:left cross:center"
					style={{
						borderBottomColor: isLast && (!info.childDepartment.length || !showAll) ? "transparent" : "#e6e6e6",
					}}
				>
					<div className="name">{info.departmentName}</div>
					{!!departmentCountMap[info.departmentId] && (
						<div className="count">{departmentCountMap[info.departmentId]}</div>
					)}
					<div data-flex-box="1" style={{ marginLeft: 20 }} />
					{hasDelete ? (
						<>
							<img className="edit_icon" src={editIcon} data-flex-box="0" alt="" />
							<img className="delete_icon" src={deleteIcon} data-flex-box="0" alt="" />
						</>
					) : (
						selectList.includes(info.departmentId) && (
							<img className="check_icon" src={chooseIcon} data-flex-box="0" alt="" />
						)
					)}
				</div>
			</StyledItem>
			{showAll &&
				info.childDepartment.map((item, index) => (
					<Page
						hasDelete={hasDelete}
						info={item}
						space={space + 1}
						key={item.departmentId}
						selectList={selectList}
						isLast={index === info.childDepartment.length - 1}
						departmentCountMap={departmentCountMap}
					/>
				))}
		</>
	);
}
Page.propTypes = {
	hasDelete: PropTypes.bool,
	info: PropTypes.object.isRequired,
	selectList: PropTypes.array,
	departmentCountMap: PropTypes.object,
	space: PropTypes.number,
	isLast: PropTypes.bool,
};
Page.defaultProps = {
	hasDelete: false,
	isLast: false,
	selectList: [],
	departmentCountMap: {},
	space: 0,
};

export default Page;
