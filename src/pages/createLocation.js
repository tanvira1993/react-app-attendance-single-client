import React, { Component } from "react";

// import Button from "@material-ui/core/Button";

import { createLocation } from "../api/configuration";

import "react-inputs-validation/lib/react-inputs-validation.min.css";

import { PageHeader } from "antd";
import { Form, Input, InputNumber, Button } from "antd";
import "antd/dist/antd.css";
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
export default class CreateLocation extends Component {
  state = {
    location: "",
  };

  onFinish = (values) => {
    console.log("opp", values.location);
    this.setState = { location: values.location };
    console.log("ert", values);
    createLocation({ name: values.location });
  };

  render() {
    const { location } = this.state;
    return (
      <React.Fragment>
        <PageHeader title="Create Organization" />
        <Form
          {...layout}
          name="nest-messages"
          onFinish={this.onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="location"
            label="Location"
            rules={[{ required: true, whitespace: true }]}
            value={location}
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
