import React from "react";
import Typography from '@material-ui/core/Typography';
import { getmonthlyAttendance } from "../api/attendanceApi";
import ManualAttedance from "../components/manualAttendance.component";
class Monthly extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      report: null,
      rendering : 0
    };
  }

   postreq =async()=>{
    this.state.rendering = 1;
    const data = await getmonthlyAttendance(1,"May");
    this.setState({ report: data });
    console.log(this.state.report);
    console.log(this.state.rendering)
    return null
}
render(){
 const design = (<ManualAttedance data={this.state.report} />)
return (
<div>
  
  <Typography >
 
  <button onClick={this.postreq}>Monthly Go</button>
  </Typography>
  {this.state.rendering === 0 ? null: design}
</div>
);
}
}

export default Monthly;
