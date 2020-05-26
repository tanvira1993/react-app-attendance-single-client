import React from "react";
import { getmonthlyAttendance } from "../api/attendanceApi";
import MonthPicker from "../components/monthPicker.component";
import moment from "moment";
import {parsingServerDate} from "../util/config";
import Cal from "../components/month.component";
class Monthly extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      report: null,
      rendering: 0,
      dateInfo : null
    };
  }

   totalDays = (mm,yyyy) => {
    return new Date(yyyy, mm, 0).getDate();
 };

  postreq = async (date) => {
    
    const data = await getmonthlyAttendance(1, date);
    this.state.rendering = 1;
    const output =  parsingServerDate(data) 
    this.setState({ report: output });
    return null;
  };
  handleShow = (date) => {
    let momentDate = moment(date.toDateString()).format("MMMMYYYY");
    this.postreq(momentDate);
    console.log(momentDate);
    const mm =  moment(date.toDateString()).format("MM");
    const yyyy =  moment(date.toDateString()).format("YYYY");
    const dd = this.totalDays(mm,yyyy)
    const info = {
      days : dd,
      startDate : `${yyyy}-${mm}-${dd}`
    }
    this.setState({ dateInfo: info });
    return null;
  };
  render() {
    const design = <Cal data={this.state.report} date={this.state.dateInfo}/>;
    return (
      <div>
        <MonthPicker handleShow={this.handleShow} />
        {this.state.rendering === 0 ? null : design}
      </div>
    );
  }
}

export default Monthly;
