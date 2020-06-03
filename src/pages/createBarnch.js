import React, { Component } from "react";

import { getOrg } from "../api/configuration";
import { createBranch } from "../api/configuration";

import "react-inputs-validation/lib/react-inputs-validation.min.css";
import { PageHeader } from "antd";
import { Form, Input, Select, Button } from "antd";
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
export default class CreateBranch extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      name: "",
      org_id: "",
      desc: "",
    };
  }
  async componentDidMount() {
    const getdata = await getOrg();
    this.setState({ data: getdata });
    console.log("data========", getdata);
  }
  // handleSubmit = () => {
  //   const data = {
  //     name: this.state.name,
  //     org_id: this.state.org_id,
  //     desc: this.state.desc,
  //   };
  //   console.log(data);
  //   createBranch(data);
  // };

  onFinish = (values) => {
    // console.log("opp", values.organization);
    this.setState = {
      name: values.name,
      org_id: values.org_id,
      desc: values.desc,
    };
    console.log("ert", values);
    createBranch({
      name: values.organization,
      org_id: values.org_id,
      desc: values.desc,
    });
  };

  render() {
    const { name, org_id, desc } = this.state;
    return (
      <React.Fragment>
        <PageHeader title="Create Branch" />
        <Form
          {...layout}
          name="nest-messages"
          onFinish={this.onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="select"
            label="Select"
            hasFeedback
            rules={[{ required: true, message: "Please select your country!" }]}
          >
            <Select placeholder="Please select a country">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, whitespace: true }]}
            value={name}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="desc"
            label="Descrepition"
            rules={[{ required: true, whitespace: true }]}
            value={desc}
          >
            <Input.TextArea />
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
