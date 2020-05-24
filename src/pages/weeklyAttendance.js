import React from "react";
import { getWeeklyyAttendance } from "../api/attendanceApi";
import Cal from "../components/month.component";
class Weekly extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      report: null,
      data : null,
      rendering: 0,
    };
  }

  postreq = async () => {
    this.state.rendering = 1;
    const data = await getWeeklyyAttendance(1);
    const unique = [...new Set(data.map(a => a.rfid_user_name))];
    this.setState({ report: unique });
    console.log('parse==>',this.state.report);
    console.log(this.state.rendering);
    return data;
  };

  parseData = async()=>{
    const mainData = await this.postreq()
    // let parsing = 
  }

  async componentDidMount() {
   await this.postreq();
    this.parseData();
  }

  render() {
    return (
      <div>
        {this.state.rendering === 0 ? null : <Cal data={this.state.report} parseDate={this.state.data} />}
      </div>
    );
  }
}

export default Weekly;
