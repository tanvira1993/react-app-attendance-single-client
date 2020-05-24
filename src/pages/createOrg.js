import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { createOrg } from "../api/configuration";
export default class CreateOrg extends Component {
  state = {
    organization: "",
  };

  handleChange = (event) => {
    const organization = event.target.value;
    this.setState({ organization });
  };

  handleSubmit = () => {
    const data = { name: this.state.organization };
    console.log(data);
    createOrg(data);
  };

  render() {
    const { organization } = this.state;
    return (
      <ValidatorForm
        ref="form"
        onSubmit={this.handleSubmit}
        onError={(errors) => console.log(errors)}
      >
        <TextValidator
          label="Organization"
          onChange={this.handleChange}
          name="organization"
          value={organization}
          validators={["required"]}
          errorMessages={["this field is required"]}
        />
        <Button
          onClick={this.handleSubmit}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
        >
          Submit
        </Button>
      </ValidatorForm>
    );
  }
}
