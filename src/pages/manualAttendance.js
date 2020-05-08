import React from "react";
import ManualAttedance from "../components/manualAttendance.component";
import { getManualAttendance } from "../api/attendanceApi";

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
    console.log("data========",getdata);
  }

  render() {
    
    return (
      <>
     <ManualAttedance data={this.state.data}/>
    
      </>
    );
  }
}

export default Manual;
