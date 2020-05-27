import React from "react";
import { getDailyAttendance } from "../api/attendanceApi";
import SingleCalender from "../components/calender.component";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import DailyAttendance from "../components/dailyAttendance.component";
import Box from '@material-ui/core/Box';
class Daily extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      report: null,
      rendering: 0,
      date: new Date(),
    };
  }
  onChange = (date) => {
    let momentDate = moment(date.toDateString()).format("YYYY-MM-DD");
    this.postreq(momentDate);
  };
  postreq = async (momentDate) => {
    this.state.rendering = 1;
    const data = await getDailyAttendance(1, momentDate);
    this.setState({ report: data });
    console.log(this.state.report);
    return null;
  };
  render() {
    const design = <DailyAttendance data={this.state.report} />;
    return (
      <div >
        <Box display="flex" justifyContent="center">
        <SingleCalender
          key={this.state.report === null ? "1" : this.state.report.id}
          onChange={this.onChange}
        />
        </Box>
        {this.state.rendering === 0 ? null : design}
      </div>
    );
  }
}
export default Daily;
