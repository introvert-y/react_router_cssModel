import React from "react";
import styled from "styled-components";
import style from "./index.module.css";

const StyledDiv = styled.div`
	width: 500px;
	height: 300px;
	text-align: center;
	.blue_color {
		color: red;
		.name {
			color: blue;
		}
	}
`;

function Page() {
	return (
		<StyledDiv>
			<h2 className="blue_color">
				<span className="name">styled-components</span>的样式，支持嵌套写法，即子类样式可以放在父类的样式里
			</h2>
			<h2 className={style.pink_color}>外部链接表，可查看类名，webpack自动帮转义类名</h2>
			<h3 className="title">App.module.css里定义的全局样式</h3>
		</StyledDiv>
	);
}

export default Page;
