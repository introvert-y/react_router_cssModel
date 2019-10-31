import React from 'react';
import PropTypes from 'prop-types';
import {
  Input, Form, Button,
} from 'antd';

const { TextArea } = Input;
// import req from '../../../req';

/**
 * 用户名弹窗
 */
function Page({form}) {
  const { getFieldDecorator, validateFields, getFieldValue } = form;
  function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
  function onSubmit() {
    validateFields((err, val) => {
      console.log('value', val);
      if (err) {
        console.log(err);
        return;
      }
      console.log(val.text);
    });
  }
  return (
    <Form
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 18,
      }}
    >
      <Form.Item label="原因：">
        {getFieldDecorator('text', {
          rules: [
            { required: true, message: 'Please input your username!' },
          ],
        })(
          <TextArea placeholder="请输入拒绝原因，必填" />,
        )}
      </Form.Item>
      <Button onClick={() => onSubmit()} disabled={getFieldValue('text') ? false : true }>提交</Button>
    </Form>
  )
}

Page.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Form.create({ name: 'edit_cause' })(Page);
