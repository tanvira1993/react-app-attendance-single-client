import React from "react";
import Typography from '@material-ui/core/Typography';
import { getDailyAttendance } from "../api/attendanceApi";
import ManualAttedance from "../components/manualAttendance.component";


class Daily extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          report: null,
          rendering : 0
        };
      }

       postreq =async()=>{
        this.state.rendering = 1;
        const data = await getDailyAttendance(1,"2020-04-30");
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
     
      <button onClick={this.postreq}>Daily Go</button>
      </Typography>
      {this.state.rendering === 0 ? null: design}
    </div>
  );
}
}
export default Daily;