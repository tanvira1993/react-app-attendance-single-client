import React, { Component } from "react";
import { PageHeader } from "antd";
import { Form, Input, InputNumber, Select, Button } from "antd";
import "antd/dist/antd.css";
import { registerFinger } from "../api/dashboardApi";
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
    registerFinger(values);
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
            name="id"
            label="ID"
            rules={[{ required: true, whitespace: true }]}
          >
            <Input />
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
