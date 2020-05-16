import React, { Fragment, useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  DateTimePicker,
  DatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
function MonthPicker(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          variant="inline"
          openTo="year"
          views={["year", "month"]}
          label="Year and Month"
          helperText="Start from year selection"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </MuiPickersUtilsProvider>
      <Box component="span">
        <Button
          variant="contained"
          onClick={() => props.handleShow(selectedDate)}
        >
          Show
        </Button>
      </Box>
    </React.Fragment>
  );
}

export default MonthPicker;
