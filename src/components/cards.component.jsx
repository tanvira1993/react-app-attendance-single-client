import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Cards = () => {
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textPrimary" gutterBottom>
              Total Students
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                // end={confirmed.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography color="textPrimary">
              {/* {new Date(lastUpdate).toDateString()} */}
            </Typography>
            <Typography variant="body2" component="p">
              Number of students.
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textPrimary" gutterBottom>
              Present
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                // end={recovered.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography color="textPrimary">
              {/* {new Date(lastUpdate).toDateString()} */}
            </Typography>
            <Typography variant="body2" component="p">
              Number of presents students.
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textPrimary" gutterBottom>
              Absent
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                // end={deaths.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography color="textPrimary">
              {/* {new Date(lastUpdate).toDateString()} */}
            </Typography>
            <Typography variant="body2" component="p">
              Number of absents.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
