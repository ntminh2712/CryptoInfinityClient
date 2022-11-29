import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { LoginWrapper } from './CustomStyled';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const Login: React.FC = () => {
  const history = useHistory();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    history.push('/reregister');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <LoginWrapper>
      <div className="login-content">
        <h1>ログイン</h1>
        <Form
          {...formItemLayout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="郵便物"
            name="email"
            rules={[
              {
                type: 'email',
                message: '入力が有効な電子メールではありません!',
              },
              {
                required: true,
                message: 'メールアドレスを入力してください!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="パスワード"
            name="password"
            rules={[
              { required: true, message: 'パスワードを入力してください!' },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              送信
            </Button>
          </Form.Item>
        </Form>
        <Link to="/forgetPassword">パスワードをお忘れの方はこちら</Link>
      </div>
    </LoginWrapper>
  );
};

export default Login;
