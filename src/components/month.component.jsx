import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const useStyles = makeStyles({
  root: {
    width: 1320,
    height: 700,
  },
  // box: {
  //   width: 1010,
  //   height: 700,
  // },
});

const Month = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();
  const handleClick = (date) => {
    console.log(typeof date);
    // const parse = date.split(" ");
    console.log(date);
    //handleDateChange(date);
  };
  return (
    <div style={{ width: "100%" }}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Box
            display="flex"
            flexDirection="row"
            p={1}
            m={1}
            bgcolor="background.paper"
            className={classes.box}
          >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Box p={1}>
                <span>
                  <DatePicker
                    variant="inline"
                    openTo="year"
                    views={["year", "month"]}
                    label="Year and Month"
                    helperText="Start from year selection"
                    value={selectedDate}
                    onChange={handleClick}
                  />
                </span>
              </Box>
            </MuiPickersUtilsProvider>

            <Box className="ml-4" p={1}>
              <span></span>
            </Box>
            <Box className="ml-4" p={1}>
              <span></span>
            </Box>
            <Box className="ml-4" p={1}>
              <span></span>
            </Box>
            <Box component="span" className="ml-4 mt-2" p={1}>
              <Button variant="contained">Show</Button>
            </Box>
          </Box>
        </CardContent>

        <CardContent>
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">Student Date</th>
                <th scope="col">1</th>
                <th scope="col">2</th>
                <th scope="col">3</th>
                <th scope="col">4</th>
                <th scope="col">5</th>
                <th scope="col">6</th>
                <th scope="col">7</th>
                <th scope="col">8</th>
                <th scope="col">9</th>
                <th scope="col">10</th>
                <th scope="col">11</th>
                <th scope="col">12</th>
                <th scope="col">13</th>
                <th scope="col">14</th>
                <th scope="col">15</th>
                <th scope="col">16</th>
                <th scope="col">17</th>
                <th scope="col">18</th>
                <th scope="col">19</th>
                <th scope="col">20</th>
                <th scope="col">21</th>
                <th scope="col">22</th>
                <th scope="col">23</th>
                <th scope="col">24</th>
                <th scope="col">25</th>
                <th scope="col">26</th>
                <th scope="col">27</th>
                <th scope="col">28</th>
                <th scope="col">29</th>
                <th scope="col">30</th>
                <th scope="col">31</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Month;
