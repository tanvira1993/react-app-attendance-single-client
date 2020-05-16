import React from "react";
import { getmonthlyAttendance } from "../api/attendanceApi";
import ManualAttedance from "../components/manualAttendance.component";
import MonthPicker from "../components/monthPicker.component";
import moment from "moment";

class Monthly extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      report: null,
      rendering: 0,
    };
  }

  postreq = async (date) => {
    this.state.rendering = 1;
    const data = await getmonthlyAttendance(1, date);
    this.setState({ report: data });
    return null;
  };
  handleShow = (date) => {
    let momentDate = moment(date.toDateString()).format("MMMYYYY");
    this.postreq(momentDate);
  };
  render() {
    const design = <ManualAttedance data={this.state.report} />;
    return (
      <div>
        <MonthPicker handleShow={this.handleShow} />
        {this.state.rendering === 0 ? null : design}
      </div>
    );
  }
}

export default Monthly;
