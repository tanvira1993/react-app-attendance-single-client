import React, { useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";
import Box from "@material-ui/core/Box";
import EventCalendar from "./eventcalendar";
import { ToastSpace, toastDesign } from "../util/global";
import {
  getRfidUsersByDeviceLocation,
  getUserAttendance,
} from "../api/attendanceApi";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Homepage(props) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const useStyles = makeStyles((theme) => ({
    root: {
      marginBottom: "10px",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));
  const [rfidusers, setrfidusers] = useState([]);
  const [render, setrender] = useState(false);
  const [report, setreport] = useState(null);
  const [dateInfo, setdateInfo] = useState(null);
  const [user, setUser] = useState(null);
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleSubmit = async () => {
    if (state != null && user != null) {
      let startDate = new Date(state[0].startDate)
        .toLocaleDateString()
        .split("/");
      let endtDate = new Date(state[0].endDate).toLocaleDateString().split("/");
      const start = `${startDate[2]}-${startDate[0].padStart(
        2,
        "0"
      )}-${startDate[1].padStart(2, "0")}`;
      const end = `${endtDate[2]}-${endtDate[0].padStart(
        2,
        "0"
      )}-${endtDate[1].padStart(2, "0")}`;
      console.log("parsed==>", start, end);

      const date1 = new Date(start);
      const date2 = new Date(end);
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      console.log(diffDays + " days");

      await parseData(start, end);
      setdateInfo({
        days: diffDays,
        startDate: start,
        endDate: end,
      });
      setrender(true);
      setExpanded(false);
      console.log("de", render);
    } else {
      console.log("ok");
      toastDesign("Validation Warning!!");
    }
  };

  const parseData = async (start, end) => {
    console.log("user==>", user);
    const data = {
      device_location_id: 1,
      rfid_user_id: user,
      start: start,
      end: end,
    };
    const mainData = await getUserAttendance(data);
    setreport(mainData);
  };

  const getData = async () => {
    const data = await getRfidUsersByDeviceLocation(1);
    console.log("hihihih", data);
    setrfidusers(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const classes = useStyles();
  return (
    <React.Fragment>
      <ToastSpace />
      <div className={classes.root}>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Filter</Typography>
            <Typography className={classes.secondaryHeading}>
              I am an expansion panel
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <div>
                <Box display="flex" justifyContent="flex-start" m={1} p={1}>
                  <Box p={1}>
                    <Autocomplete
                      onChange={(event, newValue) => {
                        if (newValue == null) {
                          setUser(null);
                          return null;
                        } else {
                          setUser(newValue.id);
                        }
                      }}
                      id="combo-box-demo"
                      options={rfidusers}
                      getOptionLabel={(option) => option.rfid_user_name}
                      style={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="name"
                          variant="outlined"
                        />
                      )}
                    />
                  </Box>
                  <Box p={1}></Box>
                  <DateRangePicker
                    onChange={(item) => setState([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={1}
                    ranges={state}
                    direction="horizontal"
                  ></DateRangePicker>
                </Box>
              </div>
              <div style={{ marginLeft: "813px", marginTop: "20px" }}>
                {" "}
                <Button
                  style={{ marginBottom: "10px" }}
                  onClick={handleSubmit}
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<SearchIcon />}
                >
                  Submit
                </Button>
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <div>
        {render === true ? (
          <EventCalendar
            style={{ margin: "auto" }}
            data={report}
            valid={dateInfo}
          />
        ) : null}
      </div>
    </React.Fragment>
  );
}

export default Homepage;
