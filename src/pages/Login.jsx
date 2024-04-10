import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Login = () => (
  <div className="login-container">
    <h1>Login</h1>
    <p>Let’s take the first step to start your journey with us</p>
    <Form
      name="basic"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="login-form"
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "Invalid email address",
          },
          {
            required: true,
            message: "Please enter your E-mail!",
          },
        ]}
        label="Email"
      >
        <Input size="large" placeholder="Enter Email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password size="large" placeholder="Enter Password"/>
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" shape="round">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
);
export default Login;
