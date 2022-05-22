import React from 'react';
import { Form, Input, Button } from 'antd';
import {Link} from "react-router-dom";
import { ReregisterWrapper } from './CustomStyled';

const Reregister: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <ReregisterWrapper>
      <div className="reregister-content">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Please enter your New password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Type it again"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Link to="/registercomplication">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </ReregisterWrapper>
  );
};

export default Reregister;
