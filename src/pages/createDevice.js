import React, { Component } from "react";

// import Button from "@material-ui/core/Button";
import { getOrg } from "../api/configuration";
import { getBranch } from "../api/configuration";
import { createLocation } from "../api/configuration";

import "react-inputs-validation/lib/react-inputs-validation.min.css";

import { PageHeader } from "antd";
import { Form, Input, InputNumber, Button, Select } from "antd";
import "antd/dist/antd.css";
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
export default class CreateDevice extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      branch_data: [],
      branch_id: "",
      org_id: "",
      location: "",
    };
  }

  async componentDidMount() {
    const getdata = await getOrg();
    this.setState({ data: getdata });
    console.log("data========", getdata);
  }

  async branchData(id) {
    const getdata2 = await getBranch();
    this.setState({ branch_data: getdata2 });
    console.log("data========", getdata2);
    console.log("id", id);
  }

  onFinish = (values) => {
    console.log("opp", values.location);
    this.setState = {
      location: values.location,
      org_id: values.org_id,
      branch_id: values.branch_id,
    };
    console.log("ert", values);
    createLocation({
      name: values.location,
      org_id: values.org_id,
      branch_id: values.branch_id,
    });
  };

  render() {
    const { location } = this.state;
    return (
      <React.Fragment>
        <PageHeader title="Create Device" />
        <Form
          {...layout}
          name="nest-messages"
          onFinish={this.onFinish}
          validateMessages={validateMessages}
        >
          >
          <Form.Item
            name="org_id"
            label="Organization"
            hasFeedback
            rules={[
              { required: true, message: "Please select your Organization" },
            ]}
          >
            <Select
              onChange={() => this.branchData()}
              placeholder="Please select a Organization"
            >
              {this.state.data.map((index) => (
                <Option value={index.id}>{index.org_name}</Option>
              ))}
            </Select>
          </Form.Item>
          {/* <Form.Item
            name="branch_id"
            label="Branch"
            hasFeedback
            rules={[{ required: true, message: "Please select your Branch!" }]}
          >
            <Select placeholder="Please select a Branch">
              {this.state.branch_data.map((index) => (
                <Option value={index.id}>{index.branch_name}</Option>
              ))}
            </Select>
          </Form.Item> */}
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
