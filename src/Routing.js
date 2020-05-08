import React from "react";
import Manual from "./pages/manualAttendance";
import {  Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Weekly from "./pages/weeklyAttendance";
import Monthly from "./pages/monthlyAttendance";
import Daily from "./pages/dailyAttendance";
import SelectedAttendance from "./pages/selectedAttendance";

const AppRoute =()=> {
    
      return (
        <div>
          <Route exact path="/" component={Homepage}></Route>              
          <Route path="/manualattendance" component={Manual}></Route>
          <Route path="/dailyattendance" component={Daily}></Route>
          <Route path="/weekattendance" component={Weekly}></Route>
          <Route path="/monthattendance" component={Monthly}></Route>
          <Route path="/selectedattendance" component={SelectedAttendance}></Route>                 
          
        </div>
      );
    }
  
  
  export default AppRoute;