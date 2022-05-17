import React from "react";
import {Button, Form, Input} from 'antd';
import {ForgetPasswordWrapper} from "./CustomStyled";

const ForgetPassword : React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <ForgetPasswordWrapper>
      <div className="forgetPassword-content">
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{required: true, message: 'Please input your email!'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </ForgetPasswordWrapper>
  )
}

export default ForgetPassword;
