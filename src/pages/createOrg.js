import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { createOrg } from "../api/configuration";
import { Textbox } from "react-inputs-validation";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
export default class CreateOrg extends Component {
  state = {
    organization: "",
  };

  handleSubmit = () => {
    const data = { name: this.state.organization };
    console.log(data);
    createOrg(data);
  };

  render() {
    const { organization } = this.state;
    return (
      <React.Fragment>
        {" "}
        <div>
          <Textbox
            attributesInput={{
              id: "Organization",
              name: "Organaization",
              type: "text",
              placeholder: "Place your organization here",
            }}
            value={organization}
            onChange={(organization, e) => {
              this.setState({ organization });
              console.log(e);
            }}
            onBlur={(e) => {
              console.log(e);
            }}
            validationOption={{
              name: "Organization",
              check: true,
              required: true,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
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
