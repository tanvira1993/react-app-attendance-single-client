import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    width: 1320,
    height: 700,
  },
});

const Month = (props) => {
  const classes = useStyles();
  // console.log("mani data=>", props.data);
  // console.log("parse date=>", props.date);
  // console.log("parse date=>", props.date['startDate']);
  // console.log("parse date=>", props.date['days']);
  const GetDates = (days,value) => {
    var aryDates = [];

    for (let i = 0; i <= days; i++) {
      const date = new Date(value);
      let last = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);

      last.setDate(last.getDate() + i);
      aryDates.push(
        last.getDate() + "/" + (last.getMonth() + 1) + "/" + last.getFullYear()
      );
    }
    return aryDates;
  };

  const dateCheck = (value, date) => {
    const charArray = value.split("/");
    const parsedDate = `${charArray[2]}-${charArray[1].padStart(2, '0')}-${charArray[0].padStart(2, '0')}T00:00:00.000Z`;
    // console.log(date, parsedDate);
    if (date == null) {
      return false;
    } else if (date.indexOf(parsedDate) !== -1) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Card className={classes.root} variant="outlined">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Student Name</th>
              {GetDates(props.date['days'],props.date['startDate']).map((value, index) => (
                <th key={index} scope="col">
                  {value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.map((data) => (
              <tr key={data.rfid_user_name}>
                <td>{data.rfid_user_name}</td>
                {GetDates( props.date['days'],props.date['startDate']).map((value, index) =>
                  dateCheck(value, data.created_at) ? (
                    <td key={index}> 🟩</td>
                  ) : (
                    <td key={index}> 🔴</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Month;
