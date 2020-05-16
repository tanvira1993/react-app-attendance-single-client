import React from "react";
import Typography from "@material-ui/core/Typography";
import { getmonthlyAttendance } from "../api/attendanceApi";
import ManualAttedance from "../components/manualAttendance.component";
import Month from "../components/month.component";
import moment from "moment";
class Monthly extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      report: null,
      rendering: 0,
    };
  }

  postreq = async () => {
    this.state.rendering = 1;
    const data = await getmonthlyAttendance(1, "May2020");
    this.setState({ report: data });
    return null;
  };
  render() {
    const design = <ManualAttedance data={this.state.report} />;
    return (
      <div>
        <Month />
        {this.state.rendering === 0 ? null : design}
      </div>
    );
  }
}

export default Monthly;
