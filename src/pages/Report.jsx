import React, { useState } from "react";
import dayjs from 'dayjs';
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
import axios from "axios";
import Place from "../Components/Place/Place";
import { baseUrl } from "../constants/contants";

const { TextArea } = Input;

const Report = () => {
  const [clickedLatLng, setClickedLatLng] = useState(null);
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    if (!clickedLatLng) {
    return  message.error("Please select the location of the crime");
    }
    const token = localStorage.getItem('token'); 
    const crimeReportUrl = baseUrl + 'crime/report';
    const apiPayload = { ...values , time:"13:20", date: dayjs(values.date).format('YYYY-MM-DD'), lat: `${clickedLatLng.lat}`, lng: `${clickedLatLng.lng}`};

    const reportResponse = await axios.post(crimeReportUrl, apiPayload, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });

    if (reportResponse?.data?.statusCode === 200) {
      message.success("Report submitted successfully");
      form.resetFields();
      setClickedLatLng(null)
    } else {
      message.error(reportResponse?.data.message)
    }
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
                <Radio value="ARSON">Arson</Radio>
                <Radio value="BURGLARY">Burglary</Radio>
                <Radio value="DRUG_ALCOHAL">Drugs Alcohol</Radio>
                <Radio value="ROBBERY">Robbery</Radio>
                <Radio value="ASSAULT">Assault</Radio>
                <Radio value="DISTRIBUTING_THE_PEACE">Disturbing the Peace</Radio>
                <Radio value="VOILATIONS_THEFT">
                   Violations Theft
                </Radio>
                <Radio value="SEX_CRIME">Sex Crime</Radio>
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
