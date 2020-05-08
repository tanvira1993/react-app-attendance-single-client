import React from "react";
import Typography from "@material-ui/core/Typography";
import { getDailyAttendance } from "../api/attendanceApi";
import ManualAttedance from "../components/manualAttendance.component";
import SingleCalender from "../components/calender.component";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
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
    // console.log(momentObj);
    // this.setState({ date: momentObj });
    // console.log(this.state.date);
    this.postreq(momentDate);
  };
  postreq = async (momentDate) => {
    this.state.rendering = 1;
    const data = await getDailyAttendance(1, momentDate);
    this.setState({ report: data });
    console.log(this.state.report);
    console.log(this.state.rendering);
    return null;
  };
  render() {
    const design = <ManualAttedance data={this.state.report} />;
    return (
      <div>
        <SingleCalender
          key={this.state.report === null ? "1" : this.state.report.id}
          onChange={this.onChange}
        />
        {/* <Typography>
         <button onClick={this.postreq}>Daily Go</button>
        </Typography> */}
        {this.state.rendering === 0 ? null : design}
      </div>
    );
  }
}
export default Daily;
