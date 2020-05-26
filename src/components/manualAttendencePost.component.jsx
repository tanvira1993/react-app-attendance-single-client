import React, { Component } from "react";
import { Checkbox } from "antd";
import { Table } from "react-bootstrap";
import { Input } from "antd";
import TimePickerAddonDemo from "./timePicker.component";
import "antd/dist/antd.css";
import { DatePipe } from "../util/global";

// const Example = (props) => {
//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th></th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//           <th>Comment</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>
//             <Checkbox></Checkbox>
//           </td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>
//             <TimePickerAddonDemo></TimePickerAddonDemo>
//           </td>
//           <td>
//             <Input placeholder="Basic Comment" />
//           </td>
//         </tr>
//       </tbody>
//     </Table>
//     //<TimePickerAddonDemo></TimePickerAddonDemo>
//   );
// };

// export default Example;
class ManualAttendencePost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>E-ID</th>
            <th>Name</th>
            <th>RFID NO</th>
            <th>STATUS</th>
            <th>TIME</th>
            <th>Date</th>
            <th>In Time</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((data1) => (
            <tr>
              <td>
                <Checkbox></Checkbox>
              </td>
              <td>{data1.user__id}</td>
              <td>{data1.rfid_user_name}</td>
              <td>{data1.rfid_no}</td>
              {data1.mark === 1 ? (
                <td>
                  <label className="container">
                    {/* <input type="checkbox" checked /> */}
                    <Checkbox checked></Checkbox>
                  </label>
                </td>
              ) : (
                <td>
                  <label className="container">
                    {/* <input type="checkbox" /> */}
                    <Checkbox></Checkbox>
                  </label>
                </td>
              )}

              <td>{data1.inTime}</td>
              <td>{DatePipe(data1.created_at)}</td>
              <td>
                <TimePickerAddonDemo></TimePickerAddonDemo>
              </td>
              <td>
                <Input placeholder="Basic Comment" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default ManualAttendencePost;
