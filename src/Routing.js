import React from "react";
import Manual from "./pages/manualAttendance";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage";
import Weekly from "./pages/weeklyAttendance";
import Monthly from "./pages/monthlyAttendance";
import Daily from "./pages/dailyAttendance";
import SelectedAttendance from "./pages/selectedAttendance";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import organization from "./pages/organization";
import CreateOrg from "./pages/createOrg";
import DateRange from "./pages/dateRange";
import UserReport from "./pages/userReport";
const AppRoute = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/manualattendance" component={Manual}></Route>
        <Route path="/dailyattendance" component={Daily}></Route>
        <Route path="/weekattendance" component={Weekly}></Route>
        <Route path="/monthattendance" component={Monthly}></Route>
        <Route
          path="/selectedattendance"
          component={SelectedAttendance}
        ></Route>
        <Route path="/signin" component={SignInAndSignUp}></Route>
        <Route path="/organization" component={organization}></Route>
        <Route path="/createorg" component={CreateOrg}></Route>
        <Route path="/dateRangeReport" component={DateRange}></Route>
        <Route path="/userReport" component={UserReport}></Route>
        
      </Switch>
    </div>
  );
};

export default AppRoute;
