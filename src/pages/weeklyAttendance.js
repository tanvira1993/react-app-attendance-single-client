import React from "react";
import { getWeeklyyAttendance } from "../api/attendanceApi";
import Cal from "../components/month.component";
import {parsingServerDate} from "../util/config"
class Weekly extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      report: null,
      rendering: 0,
      dateInfo : null
    };
  }

  getTodayTime=()=>{
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
     const info = {
       days : 7,
       startDate : `${yyyy}-${mm}-${dd}`
     }
     this.setState({ dateInfo: info });
     return info;  
  }
  parseData = async () => {
    const mainData = await getWeeklyyAttendance(1);
    this.state.rendering = 1;
    const output =  parsingServerDate(mainData)    
    this.setState({ report: output });
  };

  async componentDidMount() {
    this.getTodayTime()
    await this.parseData();
    
  }

  render() {
    return (
      <div>
        {this.state.rendering === 0 ? null : <Cal data={this.state.report} date={this.state.dateInfo} />}
      </div>
    );
  }
}

export default Weekly;
