import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../App.css";

export default class EventCalendar extends Component {
  render() {
    return (
      <div>
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          events={[
            { title: "event 1", date: "2020-05-27" },
            { title: "event 2", date: "2020-05-27" },
          ]}
        />
      </div>
    );
  }
}
