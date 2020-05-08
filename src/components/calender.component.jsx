import React, { useState } from "react";
import Calendar from "react-calendar";

const SingleCalender = (props) => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
    console.log(date);
    props.onChange(date);
  };

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
      <br />
    </div>
  );
};

export default SingleCalender;
