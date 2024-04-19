import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Button, Checkbox, Form, Input, message} from "antd";
import { baseUrl } from "../constants/contants"; // Corrected import path

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      setLoading(true);
      const apiPayload = { ...values };
      const url = baseUrl + 'users/login';
      const { data } = await axios.post(url, apiPayload);
      console.log("data", data)

      if (data.statusCode === 200) {
        message.success("User logged in successfully")
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('crimeMapUser', data.data.user.name); 
        navigate("/")
        window.location.reload()
      } else {
        message.error(data.message)
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
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
            <Input.Password size="large" placeholder="Enter Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" shape="round" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
