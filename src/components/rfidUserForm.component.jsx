import React, { Component } from "react";
import { PageHeader } from "antd";
import { Form, Input, InputNumber, Select, Button } from "antd";
import "antd/dist/antd.css";
import { rfidUserCreate } from "../api/dashboardApi";
import { ToastSpace } from "../util/global";
const { Option } = Select;
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 12 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

class RfidUserAdd extends Component {
  state = {};
  onFinish = (values) => {
    console.log(values);
    rfidUserCreate(values);
  };
  render() {
    return (
      <React.Fragment>
        <ToastSpace />
        <PageHeader title="Create Users" />
        <Form
          {...layout}
          name="nest-messages"
          onFinish={this.onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, whitespace: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="rfid_no"
            label="RFID/FingerPrint"
            rules={[{ required: true, whitespace: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="roll"
            label="E-ID"
            rules={[{ required: true, whitespace: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="mobile"
            label="Mobile"
            rules={[{ required: true, whitespace: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="desc"
            label="Description"
            rules={[{ required: true, whitespace: true }]}
          >
            <Input />
          </Form.Item>

          {/* <Form.Item
            name="fingerprint"
            label="Fingerprint"
            rules={[{ required: false, whitespace: true }]}
          >
            <Input />
          </Form.Item> */}

          <Form.Item
            name="status"
            label="STATUS"
            hasFeedback
            rules={[
              { required: true, message: "Please select active status!" },
            ]}
          >
            <Select placeholder="Please select status">
              <Option value={1}>Active</Option>
              <Option value={0}>In Active</Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
            <Button
              // onClick={this.handleSubmit}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </React.Fragment>
    );
  }
}

export default RfidUserAdd;
