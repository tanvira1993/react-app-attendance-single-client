import React from "react";
import Typography from '@material-ui/core/Typography';

import { getSelectedAttendance } from "../api/attendanceApi";
import ManualAttedance from "../components/manualAttendance.component";
class Selected extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      report: null,
      rendering : 0
    };
  }

   postreq =async()=>{
    this.state.rendering = 1;
    const data = await getSelectedAttendance(1,"2019-04-02","2020-05-05");
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
 
  <button onClick={this.postreq}>Selected Go</button>
  </Typography>
  {this.state.rendering === 0 ? null: design}
</div>
);
}
}

export default Selected;
