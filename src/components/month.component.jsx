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

  const GetDates = () => {
    var aryDates = [];

    for (let i = 0; i <= 7; i++) {
      const date = new Date();
      let last = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);

      last.setDate(last.getDate() + i);
      aryDates.push(
        last.getDate() + "/" + (last.getMonth() + 1) + "/" + last.getFullYear()
      );
    }
    return aryDates;
  };

  return (
    <div style={{ width: "100%" }}>
      <Card className={classes.root} variant="outlined">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Student Name</th>
              {GetDates().map((value, index) => (
                <th key={index} scope="col">
                  {value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
           
              {props.data.map((value,index) => (
                <tr key={index}>
                  <td>{value}</td>
                </tr>
              ))}
            
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Month;
