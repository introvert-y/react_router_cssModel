import React, { useState } from "react";
import PropTypes from "prop-types";

function Page() {
	const [name, setName] = useState("GAY");
	return (
		<div style={{ marginLeft: 50, width: 500 }}>
			<h2>
				“浅比较”的模式来检查 props 和 state
				中所有的字段，变化则渲染，否则复用之前的渲染，相当于在只有一个state变量时的preprops!==props时渲染。也可通过shouldComponentUpdate手动实现
				可打开控制台查看渲染次数
			</h2>
			<button type="button" onClick={() => setName("Anny")}>
				changeName to Anny
			</button>
			<button type="button" onClick={() => setName("Den")} style={{ marginLeft: 50 }}>
				changeName to Den
			</button>
			<br />
			<br />
			<SonComponent name={name} />
		</div>
	);
}

function Son({ name }) {
	console.log("子组件渲染了");
	return <div>{name}</div>;
}

Son.propTypes = {
	name: PropTypes.string.isRequired,
};

const SonComponent = React.memo(Son);

export default Page;
