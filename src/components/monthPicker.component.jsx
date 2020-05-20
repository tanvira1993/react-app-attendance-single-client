import React, { Fragment, useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  DateTimePicker,
  DatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import indigo from "@material-ui/core/colors/indigo";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: indigo,
  },
});
function MonthPicker(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <React.Fragment>
      <ThemeProvider theme={defaultMaterialTheme}>
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
      </ThemeProvider>

      <Box className="ml-2" component="span">
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
