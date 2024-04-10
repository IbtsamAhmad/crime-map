import React from "react";
import { Button, Form, Input, Select, Row, Col } from "antd";
import { ReactComponent as IconOne } from "../assets/IconOne.svg";
import { ReactComponent as IconTwo } from "../assets/IconTwo.svg";
import { ReactComponent as IconThree } from "../assets/IconThree.svg";
const { TextArea } = Input;
const { Option } = Select;
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Contact = () => (
  <div className="contact-container" id="contact-container">
  
    <Row gutter={[32,32]}>
    <Col lg={12} className="first-col">
    <div className="content">
    <div className="icon">
    <IconThree/>
    <div>
        <p>Address</p>
        <p>XXXXXXXXXX</p>
    </div>

    </div>
   

    <div className="icon">
    <IconOne/>
    <div>
        <p>Phone Number</p>
        <p>XXXX-XXX-XXX</p>
    </div>

    </div>

    <div className="icon">
    <IconTwo/>
    <div>
        <p>Mail Address</p>
        <p>XXXXXXXXXX</p>
    </div>

    </div>
 

    </div>
    </Col>
    <Col lg={12}>
    <div className="col-two">
    <h1>Contact us</h1>
    <p>Send us a Message</p>
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
        name="name"
        rules={[
          {
            required: true,
            message: "Please enter your name!",
          },
        ]}
        label="Name"
      >
        <Input size="large" placeholder="Enter name" />
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
        label="Email"
      >
        <Input size="large" placeholder="Enter Email" />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
          () => ({
            validator(_, value) {
              const convertedValue = Number(value);
              if (!value) {
                return Promise.resolve();
              } else if (
                !isNaN(convertedValue) &&
                (value.length === 9 || value.length === 10)
              ) {
                return Promise.resolve();
              }

              return Promise.reject("Invalid phone number");
            },
          }),
        ]}
      >
        <Input
          size="large"
          style={{ width: "100%" }}
          placeholder="Phone Number"
        />
      </Form.Item>

      <Form.Item name="description" label="Description">
        <TextArea rows={3} placeholder="Enter Description" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" shape="round">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>

 
    </Col>
    </Row>
 
  </div>
);
export default Contact;
