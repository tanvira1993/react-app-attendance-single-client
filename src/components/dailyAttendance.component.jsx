import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { Table } from "react-bootstrap";
import { Input } from "antd";
import "antd/dist/antd.css";
import { DatePipe } from "../util/global";
class ManualAttendencePost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
      const inputStyle = {backgroundColor :'white', color:'black'} 
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>E-ID</th>
            <th>Name</th>
            <th>RFID NO</th>
            <th>STATUS</th>
            <th>Date</th>
            <th>IN Time</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((data1) => (
            <tr key={data1.id}>
              <td>{data1.user__id}</td>
              <td>{data1.rfid_user_name}</td>
              <td>{data1.rfid_no}</td>
              {data1.created_at !== null ? (
                <>
                  {console.log("checkd", data1.created_at)}
                  <td>
                    <label className="container">
                      <Checkbox
                        defaultChecked
                        color="primary"
                        size="small"
                        inputProps={{ "aria-label": "disabled checkbox" }}
                      />
                    </label>
                  </td>
                </>
              ) : (
                <>
                  {console.log("un checkd", data1.created_at)}

                  <td>
                    <label className="container"></label>
                  </td>
                </>
              )}

              <td>{DatePipe(data1.created_at)}</td>

              <td>
                <Input style={inputStyle} placeholder="in_time" value={data1.inTime} disabled />
              </td>
              <td>
                <Input style={inputStyle} placeholder="Comments" value={data1.comment} disabled />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default ManualAttendencePost;
