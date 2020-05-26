import React from "react";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";

function Homepage() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const handleSubmit = () => {
    console.log(state);
  };
  return (
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
}

export default Homepage;
