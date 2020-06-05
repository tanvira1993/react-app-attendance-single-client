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
import branch from "./pages/branch";
import CreateBranch from "./pages/createBarnch";
import location from "./pages/location";
import CreateLoction from "./pages/createLocation";
import device from "./pages/device";
import CreateDevice from "./pages/createDevice";
import DateRange from "./pages/dateRange";
import UserReport from "./pages/userReport";
import RfidUser from "./pages/rfidUser";
import RfidUserAdd from "./components/rfidUserForm.component";
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
        <Route path="/rfidUser" component={RfidUser}></Route>
        <Route path="/createorg" component={CreateOrg}></Route>
        <Route path="/branch" component={branch}></Route>
        <Route path="/createBranch" component={CreateBranch}></Route>
        <Route path="/location" component={location}></Route>
        <Route path="/createLocation" component={CreateLoction}></Route>
        <Route path="/device" component={device}></Route>
        <Route path="/createDevice" component={CreateDevice}></Route>
        <Route path="/createRfidUser" component={RfidUserAdd}></Route>
        <Route path="/dateRangeReport" component={DateRange}></Route>
        <Route path="/userReport" component={UserReport}></Route>
      </Switch>
    </div>
  );
};

export default AppRoute;
