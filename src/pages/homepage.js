import React from "react";
import MyClock from "../components/clock.component";
import { Line, Pie, Doughnut } from "react-chartjs-2";
import Box from "@material-ui/core/Box";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const state2 = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};
const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [65, 59, 80, 81, 56],
    },
  ],
};

class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ width: "100%" }}>
          <Box display="flex" justifyContent="flex-start">
            <Box display="flex" justifyContent="center" width="50%">
              <diV>
                <MyClock />
              </diV>{" "}
            </Box>
            <Box className="ml-6">
              <div>
                {" "}
                <Card variant="outlined">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                      be
                    </Typography>
                    <Typography color="textSecondary">adjective</Typography>
                    <Typography variant="body2" component="p">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            </Box>
          </Box>
        </div>
        <div className="mt-4" style={{ width: "100%" }}>
          <Box display="flex" justifyContent="flex-start">
            <Box width="50%">
              <diV>
                <Pie
                  data={state}
                  options={{
                    title: {
                      display: true,
                      text: "Average Rainfall per month",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </diV>{" "}
            </Box>
            <Box width="50%">
              <div className="ml-3">
                <Line
                  data={state2}
                  options={{
                    title: {
                      display: true,
                      text: "Average Rainfall per month",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </div>{" "}
            </Box>
          </Box>
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;
