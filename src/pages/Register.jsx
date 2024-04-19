import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input , message} from "antd";

import { baseUrl } from "../constants/contants";
const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);


  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      setLoading(true);
      const apiPayload={
        ...values
      }
      const url = baseUrl + 'users/signup';
      const { data } = await axios.post(url, apiPayload);
      console.log("data", data)
      if (data.statusCode === 200) {
        message.success("User created successfully")   
      }
      else{
        message.error(data.message)
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
      form.resetFields();
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (

    <div className="login-container">
    <h1>Registration</h1>
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
      form={form}
    >
      <Form.Item
        label="Username"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="Enter name" size="large" />
      </Form.Item>

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
        label="Email ID"
      >
        <Input size="large" placeholder="Email ID" />
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
        <Input.Password  size="large" placeholder="Enter password"/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" shape="round">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
  )
}


export default Login;
