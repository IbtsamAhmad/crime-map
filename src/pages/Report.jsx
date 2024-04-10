import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Radio,
  DatePicker,
  InputNumber,
  Row,
  Col,
  message,
  Spin,
} from "antd";
import Place from "../Components/Place/Place";

const { TextArea } = Input;

const Report = () => {
  const [clickedLatLng, setClickedLatLng] = useState(null);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    if (!clickedLatLng) {
      message.error("Please select the location of the crime");
    }
    console.log("Location", clickedLatLng);
    console.log("Success:", values);
    message.success("Report submitted successfully");
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="report-container">
      <h1>Report Form</h1>
      <p>Report a crime near you</p>
      <Row gutter={[32, 32]} style={{ marginTop: "30px" }}>
        <Col lg={12}>
          <Place
            clickedLatLng={clickedLatLng}
            setClickedLatLng={setClickedLatLng}
          />
        </Col>
        <Col lg={12}>
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
              maxWidth: 650,
            }}
            form={form}
          >
            <Form.Item
              label="Type of Crime"
              name="type"
              rules={[
                {
                  required: true,
                  message: "Please select type of crime!",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="Arson">Arson</Radio>
                <Radio value="Burglary">Burglary</Radio>
                <Radio value="Drugs">Drugs</Radio>
                <Radio value="Robbery">Robbery</Radio>
                <Radio value="Assault">Assault</Radio>
                <Radio value="Disturbing the Peace">Disturbing the Peace</Radio>
                <Radio value="Alcohol Violations Theft">
                  Alcohol Violations Theft
                </Radio>
                <Radio value="Sex Crime">Sex Crime</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item name="status" label="Status">
              <Input size="large" placeholder="Status" />
            </Form.Item>

            <Form.Item name="age" label="Age">
              <InputNumber size="large" placeholder="Enter age" />
            </Form.Item>
            <Form.Item name="date" label="Date">
              <DatePicker size="large" />
            </Form.Item>

            <Form.Item name="description" label="Description">
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" shape="round">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default Report;
