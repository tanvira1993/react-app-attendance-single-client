import React from "react";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";
import Cal from "../components/month.component";
import { parsingServerDate } from "../util/config";
import { getSelectedAttendance } from "../api/attendanceApi";
function Homepage() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [render, setrender] = useState(false);
  const [report, setreport] = useState(null);
  const [dateInfo, setdateInfo] = useState(null);

  const handleSubmit = async () => {
    if (state != null) {
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
        startDate: end,
      });
      setrender(true);
      console.log("de", render);
    }
  };

  const parseData = async (start, end) => {
    const mainData = await getSelectedAttendance(1, start, end);
    const output = parsingServerDate(mainData);
    setreport(output);
  };

  const filter = (
    <React.Fragment>
      {" "}
      <div>
        {" "}
        <DateRangePicker
          onChange={(item) => setState([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={1}
          ranges={state}
          direction="horizontal"
        ></DateRangePicker>
      </div>
      <div style={{ marginLeft: "462px", marginTop: "20px" }}>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
        >
          Submit
        </Button>
      </div>
    </React.Fragment>
  );
  const bodyDesign = <>{<Cal data={report} date={dateInfo} />}</>;
  return <>{render === false ? filter : bodyDesign}</>;
}

export default Homepage;
