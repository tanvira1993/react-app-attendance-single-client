import React, { Component } from "react";
import { TimePicker, Button } from "antd";

class TimePickerAddonDemo extends React.Component {
  state = { open: false };

  handleOpenChange = (open) => {
    this.setState({ open });
  };

  handleClose = () => this.setState({ open: false });
  onChange(time, timeString) {
    console.log(timeString);
  }
  render() {
    return (
      <TimePicker
        use12Hours
        format="h:mm a"
        open={this.state.open}
        onOpenChange={this.handleOpenChange}
        // onChange={this.onChange}
        renderExtraFooter={() => (
          <Button size="small" type="primary" onClick={this.handleClose}>
            Ok
          </Button>
        )}
      />
    );
  }
}
export default TimePickerAddonDemo;
