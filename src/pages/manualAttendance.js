import React from "react";
import ManualAttedance from "../components/manualAttendance.component";
import { getManualAttendance } from "../api/attendanceApi";
import ManualAttendencePost from "../components/manualAttendencePost.component";

class Manual extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    const getdata = await getManualAttendance();
    this.setState({ data: getdata });
    console.log("data========", getdata);
  }

  render() {
    return (
      <>
        <ManualAttendencePost data={this.state.data} />
      </>
      //<ManualAttendencePost></Example>
    );
  }
}

export default Manual;
