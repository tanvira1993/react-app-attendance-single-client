import React from "react";
import { DatePipe } from "../util/global";
class ManualAttendance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>E-ID</th>
              <th>Name</th>
              <th>RFID NO</th>
              <th>STATUS</th>
              <th>TIME</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((data1) => (
              <tr>
                <td>{data1.user__id}</td>
                <td>{data1.rfid_user_name}</td>
                <td>{data1.rfid_no}</td>
                {data1.mark === 1 ? (
                  <td>
                    <label className="container">
                      <input type="checkbox" checked />
                    </label>
                  </td>
                ) : (
                  <td>
                    <label className="container">
                      <input type="checkbox" />
                    </label>
                  </td>
                )}

                <td>{data1.inTime}</td>
                <td>{DatePipe(data1.created_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ManualAttendance;
