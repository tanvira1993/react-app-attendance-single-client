import React from "react";
import MyClock from "../components/clock.component";
import { Line, Pie, Doughnut } from "react-chartjs-2";
import Box from "@material-ui/core/Box";
import Cards from "../components/cards.component";
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
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <MyClock />
        </div>

        <Cards />

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
