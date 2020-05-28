import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../App.css";
import { BackDatePipe, TimePipe, DatePipe } from "../util/global";
export default class EventCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: null,
    };
  }
  formatEvents(data) {
    let event = [];
    data.map((data) => {
      event.push(
        {
          title: `In-Time: ${TimePipe(DatePipe(data.created_at), data.inTime)}`,
          date: BackDatePipe(data.created_at),
        },
        {
          title: `Out-Time: ${TimePipe(
            DatePipe(data.created_at),
            data.inTime
          )}`,
          date: BackDatePipe(data.created_at),
        },
        {
          title: `Comment: ${data.comment}`,
          date: BackDatePipe(data.created_at),
        }
      );
    });
    console.log("array", event);
    //color: 'black',textColor: 'yellow'
    this.setState({ event: event });
    return event;
  }

  componentDidMount() {
    this.formatEvents(this.props.data);
  }
  render() {
    return (
      <div>
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          validRange={{
            start: this.props.valid.startDate,
            end: this.props.valid.endDate,
          }}
          events={this.state.event}
        />
      </div>
    );
  }
}
