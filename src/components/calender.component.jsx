import React, { Component } from "react";
import Calendar from "react-calendar";

class SingleCalender extends Component {
  state = {
    date: new Date(),
  };
  onChange = (date) => this.setState({ date });

  render() {
    return (
      <div>
        <Calendar onChange={this.onChange} value={this.state.date} />
        <br />
      </div>
    );
  }
}

export default SingleCalender;
