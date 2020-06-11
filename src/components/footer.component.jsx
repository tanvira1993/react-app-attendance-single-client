import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: '100vh'
    // height: "80%",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    marginTop: "auto",
    color: "white",
    backgroundColor: "#0A2B69",
    flexShrink: "0",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            &copy; {new Date().getFullYear()} MEMES INC | All Rights Reserved |
            Terms Of Service | Privacy
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
