import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import Box from "@material-ui/core/Box";

import styles from "./Cards.module.css";

const Cards = (props) => {
  const absent = props.users - props.present;
  return (
    // <div className={styles.container}>
    //   <Grid container spacing={3} justify="center">
    //     <Grid
    //       item
    //       xs={12}
    //       md={3}
    //       component={Card}
    //       className={cx(styles.card, styles.infected)}
    //     >
    //       <CardContent>
    //         <Typography color="textPrimary" gutterBottom>
    //           Total Users
    //         </Typography>
    //         <Typography variant="h5" component="h2">
    //           <CountUp
    //             start={0}
    //             end={props.users}
    //             duration={2.75}
    //             separator=","
    //           />
    //         </Typography>
    //         <Typography color="textPrimary">
    //         </Typography>
    //         <Typography variant="body2" component="p">
    //           Number of users.
    //         </Typography>
    //       </CardContent>
    //     </Grid>
    //     <Grid
    //       item
    //       xs={12}
    //       md={3}
    //       component={Card}
    //       className={cx(styles.card, styles.recovered)}
    //     >
    //       <CardContent>
    //         <Typography color="textPrimary" gutterBottom>
    //           Present Users
    //         </Typography>
    //         <Typography variant="h5" component="h2">
    //           <CountUp
    //             start={0}
    //             end={props.present}
    //             duration={2.75}
    //             separator=","
    //           />
    //         </Typography>
    //         <Typography color="textPrimary">
    //           {/* {new Date(lastUpdate).toDateString()} */}
    //         </Typography>
    //         <Typography variant="body2" component="p">
    //           Number of presents users.
    //         </Typography>
    //       </CardContent>
    //     </Grid>
    //     <Grid
    //       item
    //       xs={12}
    //       md={3}
    //       component={Card}
    //       className={cx(styles.card, styles.deaths)}
    //     >
    //       <CardContent>
    //         <Typography color="textPrimary" gutterBottom>
    //           Absent
    //         </Typography>
    //         <Typography variant="h5" component="h2">
    //           <CountUp
    //             start={0}
    //             end={absent}
    //             duration={2.75}
    //             separator=","
    //           />
    //         </Typography>
    //         <Typography color="textPrimary">
    //           {/* {new Date(lastUpdate).toDateString()} */}
    //         </Typography>
    //         <Typography variant="body2" component="p">
    //           Number of absents.
    //         </Typography>
    //       </CardContent>
    //     </Grid>
    //   </Grid>
    // </div>
    <div style={{ width: "100%" }}>
      <Box display="flex" justifyContent="center" m={1} p={1}>
        <Box p={1}>
          <Card className={cx(styles.card, styles.infected)}>
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                Total Users
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={props.users}
                  duration={2.75}
                  separator=","
                />
              </Typography>
              <Typography color="textPrimary"></Typography>
              <Typography variant="body2" component="p">
                Number of total users
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box p={1}>
          <Card className={cx(styles.card, styles.recovered)}>
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                Present Users
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={props.present}
                  duration={2.75}
                  separator=","
                />
              </Typography>
              <Typography color="textPrimary">
                {/* {new Date(lastUpdate).toDateString()} */}
              </Typography>
              <Typography variant="body2" component="p">
                Number of presents users
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box p={1}>
          <Card className={cx(styles.card, styles.deaths)}>
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                Absent
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp start={0} end={absent} duration={2.75} separator="," />
              </Typography>
              <Typography color="textPrimary">
                {/* {new Date(lastUpdate).toDateString()} */}
              </Typography>
              <Typography variant="body2" component="p">
                Number of total absents
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </div>
  );
};
export default Cards;
