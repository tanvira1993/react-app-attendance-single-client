import React, { Component } from "react";
import { Checkbox, TimePicker } from "antd";
import { Table } from "react-bootstrap";
import { Input, Button } from "antd";
import "antd/dist/antd.css";
import { DatePipe } from "../util/global";
import moment from "moment";
import { getManualAttendance } from "../api/attendanceApi";

class ManualAttendencePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      selectAll: false,
      checked: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSingleCheckboxChange = this.handleSingleCheckboxChange.bind(
      this
    );
  }

  handleChange = () => {
    console.log("handle change");
    var selectAll = !this.state.selectAll;
    this.setState({ selectAll: selectAll });
    var checkedCopy = [];
    this.state.result.forEach(function(e, index) {
      checkedCopy.push(selectAll);
    });
    // this.setState({
    //   checked: checkedCopy,
    // });
    this.setState({ checked: checkedCopy }, function() {
      console.log("Handle change: " + this.state.checked);
    });
    // console.log(this.state);
  };

  handleSingleCheckboxChange = (index) => {
    console.log(index);

    var checkedCopy = this.state.checked;
    checkedCopy[index] = !this.state.checked[index];
    if (checkedCopy[index] === false) {
      this.setState({ selectAll: false });
    }

    this.setState({
      checked: checkedCopy,
    });
  };

  async componentDidMount() {
    const getdata = await getManualAttendance();

    var checkedCopy = [];
    var selectAll = this.state.selectAll;

    getdata.forEach(function(e, index) {
      checkedCopy.push(selectAll);
    });

    this.setState({
      result: getdata,
      checked: checkedCopy,
      selectAll: selectAll,
    });
    console.log("Component did Mount --", this.state);
  }
  handlePost = () => {
    console.log("daataaa", this.props.data);
    console.log("daataaakkkkk", this.state.result);
  };
  changeCommet = (item, event) => {
    if (item.comment === null) {
      console.log(this.state.result);
      const items = this.state.result.filter(
        (m) => m.user__id === item.user__id
      );
      console.log(items);
    }
    console.log(item);
    console.log(event.target.value);
  };
  timeChange = (item, timeString) => {
    timeString.locale("de");
    var myTime = timeString.format("h:mm a");
  };

  render() {
    return (
      <React.Fragment>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <Checkbox
                  color="primary"
                  size="small"
                  onChange={this.handleChange}
                  checked={this.state.selectAll}
                />
              </th>
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
            {this.state.result.map((data1, index) => (
              <tr key={data1.user__id}>
                <td>
                  <Checkbox
                    color="primary"
                    size="small"
                    defaultChecked={this.state.checked[index]}
                    checked={this.state.checked[index]}
                    onChange={() => this.handleSingleCheckboxChange(index)}
                  />
                </td>
                <td>{data1.user__id}</td>
                <td>{data1.rfid_user_name}</td>
                <td>{data1.rfid_no}</td>
                {data1.created_at !== null ? (
                  <td>
                    <label className="container">
                      <Checkbox
                        key={data1.user__id}
                        defaultChecked
                        color="primary"
                        size="small"
                        inputProps={{ "aria-label": "disabled checkbox" }}
                      />
                    </label>
                  </td>
                ) : (
                  <td>
                    <label className="container"></label>
                    <Checkbox key={data1.user__id} />
                  </td>
                )}
                <td>{data1.inTime}</td>
                <td>{DatePipe(data1.created_at)}</td>

                {data1.inTime !== null ? (
                  <td>
                    <TimePicker use12Hours value={data1.inTime} />
                  </td>
                ) : (
                  <td>
                    <TimePicker
                      format="h:mm a"
                      use12Hours
                      onChange={(event) => this.timeChange(data1, event)}
                    />
                  </td>
                )}

                {data1.comment !== null ? (
                  <td>
                    <Input
                      key={data1.user__id}
                      placeholder="Basic Comment"
                      value={data1.comment}
                    />
                  </td>
                ) : (
                  <td>
                    <Input
                      key={data1.user__id}
                      onChange={(event) => this.changeCommet(data1, event)}
                      placeholder="Basic Comment"
                    />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={this.handlePost} type="primary">
          Submit Attendence
        </Button>
      </React.Fragment>
    );
  }
}

export default ManualAttendencePost;
