import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { getOrg } from "../api/configuration";
import { createBranch } from "../api/configuration";
import { Textbox, Select } from "react-inputs-validation";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
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
  handleSubmit = () => {
    const data = {
      name: this.state.name,
      org_id: this.state.org_id,
      desc: this.state.desc,
    };
    console.log(data);
    createBranch(data);
  };

  render() {
    const { name, org_id, desc } = this.state;
    return (
      <React.Fragment>
        <div>
          {" "}
          <Textbox
            attributesInput={{
              id: "Name",
              name: "Name",
              type: "text",
              placeholder: "Place your name here",
            }}
            value={name}
            onChange={(name, e) => {
              this.setState({ name });
              console.log(e);
            }}
            onBlur={(e) => {
              console.log(e);
            }}
            validationOption={{
              name: "Name",
              check: true,
              required: true,
            }}
          />
        </div>
        <div className="mt-2">
          {" "}
          <Textbox
            attributesInput={{
              id: "Desc",
              name: "Desc",
              type: "text",
              placeholder: "Place your description here",
            }}
            value={desc}
            onChange={(desc, e) => {
              this.setState({ desc });
              console.log(e);
            }}
            onBlur={(e) => {
              console.log(e);
            }}
            validationOption={{
              name: "Desc",
              check: true,
              required: true,
            }}
          />
        </div>

        <div className="mt-2">
          {" "}
          <Select
            attributesInput={{
              // Optional.
              id: this.state.data.id,
              name: this.state.data.name,
            }}
            value={this.state.data.name} // Optional.[String].Default: "".
            optionList={this.state.data} // Required.[Array of Object(s)].Default: [].
            onChange={(res, e) => {
              this.setState({ org_id: res.id });
              console.log(res.id);
            }} // Optional.[Func].Default: () => {}. Will return the value.
            onBlur={() => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
            customStyleOptionListContainer={{
              maxHeight: "200px",
              overflow: "auto",
              fontSize: "14px",
            }} // Optional.[Object].Default: {}.
            validationOption={{
              name: "org_id", // Optional.[String].Default: "". To display in the Error message. i.e Please select a ${name}.
              check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
              required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
            }}
          />
        </div>

        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="mt-2"
        >
          <Button
            onClick={this.handleSubmit}
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            startIcon={<SaveIcon />}
          >
            Submit
          </Button>
        </div>
      </React.Fragment>
    );
  }
}
