import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Input, Form, Button, message } from "antd";

const { TextArea } = Input;
// import req from '../../../req';

/**
 * 用户名弹窗
 */
function Page({ form }) {
	const { getFieldDecorator, validateFields, getFieldValue } = form;
	useEffect(() => {
		message.success("111");
	}, []);
	function onSubmit() {
		validateFields((err, val) => {
			console.log("value", val);
			if (err) {
				console.log(err);
				return;
			}
			console.log(val.text);
		});
	}
	return (
		<>
			<h2>这里做了两件事</h2>
			<h3>1.解决路由跳转的时候，ant-design的modal和message组件不关闭问题，需要全局监听，处理在/router/index.js中</h3>
			<h3 style={{ marginBottom: 20 }}>2.下面实现的是输入内容才能点击提交按钮，否则按钮为disable</h3>
			<Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} style={{ width: 500, textAlign: "center" }}>
				<Form.Item label="原因：">
					{getFieldDecorator("text", { rules: [{ required: true, message: "Please input your username!" }] })(
						<TextArea placeholder="请输入拒绝原因，必填" />
					)}
				</Form.Item>
				<Button onClick={() => onSubmit()} disabled={!getFieldValue("text")}>
					提交
				</Button>
			</Form>
		</>
	);
}

Page.propTypes = {
	form: PropTypes.object.isRequired
};

export default Form.create({ name: "edit_cause" })(Page);
