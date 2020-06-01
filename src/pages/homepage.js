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
import {getpresent, getallUsers,getChartValue} from "../api/dashboardApi"
import {DateArray} from "../util/global"
class Homepage extends React.Component {

  constructor(props){
    super(props)
    this.state={
      users : 0,
      present : 0,
      date : null,
      parseDate:null
    }
  }
  async componentDidMount(){
    const users = await getallUsers()
    const present = await getpresent()
    const date = await getChartValue()
    let values = Object.values(date)
    const parseDate = DateArray(5)
    this.setState ({users: users,present:present, date:values,parseDate : parseDate})
  }
  render() {

    const state2 = {
      labels: this.state.parseDate,
      datasets: [
        {
          label: "persons",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: this.state.date,
    
        },
      ],
    };
     const state = {
      labels: this.state.parseDate,
      datasets: [
        {
          label: "persons",
          backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
          hoverBackgroundColor: [
            "#501800",
            "#4B5000",
            "#175000",
            "#003350",
            "#35014F",
          ],
          data: this.state.date,
        },
      ],
    };
    
    return (
      <React.Fragment>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <MyClock />
        </div>

        <Cards users={this.state.users} present={this.state.present}/>

        <div className="mt-4" style={{ width: "100%" }}>
          <Box display="flex" justifyContent="flex-start">
            <Box width="50%">
              <div>
                <Pie
                  data={state}
                  options={{
                    title: {
                      display: true,
                      text: "Previous Days Present Ratio",
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
            <Box width="50%">
              <div className="ml-3">
                <Line
                  data={state2}
                  options={{
                    title: {
                      display: true,
                      text: "Previous Days Present Ratio",
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
