import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";
import IconDashboard from "@material-ui/icons/Dashboard";

import IconBarChart from "@material-ui/icons/BarChart";
import IconLibraryBooks from "@material-ui/icons/LibraryBooks";
import Collapse from "@material-ui/core/Collapse";
import Routing from "../Routing";
import { BrowserRouter, Link } from "react-router-dom";
import StickyFooter from "../components/footer.component";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appMenu: {
    width: "100%",
  },
  navList: {
    width: drawerWidth,
  },
  menuItem: {
    width: drawerWidth,
  },
  menuItemIcon: {
    color: "#607D8B",
  },
  root: {
    display: "flex",
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleClick() {
    setOpen1(!open1);
  }

  function handleSettingClick() {
    setOpen2(!open2);
  }

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          style={{ background: "#2E3B55" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Attendance Management
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <h5>Admin Panel</h5>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />

          <List component="nav" className={classes.appMenu} disablePadding>
            <ListItem button className={classes.menuItem}>
              <ListItemIcon className={classes.menuItemIcon}>
                <IconDashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem
              button
              component={Link}
              to="/manualAttendance"
              className={classes.menuItem}
            >
              <ListItemIcon className={classes.menuItemIcon}>
                <IconBarChart />
              </ListItemIcon>
              <ListItemText
                className="font-weight-light"
                primary="Manual Attendance"
              />
            </ListItem>
            
            <ListItem button onClick={handleClick} className={classes.menuItem}>
              <ListItemIcon className={classes.menuItemIcon}>
                <IconLibraryBooks />
              </ListItemIcon>
              <ListItemText primary="Reports" />
              {open1 ? <IconExpandLess /> : <IconExpandMore />}
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <Divider />
              <List component="div" disablePadding>
                <ListItem
                  button
                  component={Link}
                  to="/dailyattendance"
                  className={classes.menuItem}
                >
                  <ListItemIcon className={classes.menuItemIcon}>
                <IconBarChart />
              </ListItemIcon>
                  <ListItemText className="font-weight-light" primary="Daily Report" />
                </ListItem>

                <ListItem
                  button
                  component={Link}
                  to="/weekattendance"
                  className={classes.menuItem}
                >
                  <ListItemIcon className={classes.menuItemIcon}>
                <IconBarChart />
              </ListItemIcon>
                  <ListItemText className="font-weight-light" primary="Weekly Report" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/monthattendance"
                  className={classes.menuItem}
                >
                  <ListItemIcon className={classes.menuItemIcon}>
                <IconBarChart />
              </ListItemIcon>
                  <ListItemText className="font-weight-light" primary="Monthly Report" />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={handleSettingClick} className={classes.menuItem}>
              <ListItemIcon className={classes.menuItemIcon}>
                <IconLibraryBooks />
              </ListItemIcon>
              <ListItemText primary="Seetings" />
              {open2 ? <IconExpandLess /> : <IconExpandMore />}
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <Divider />
              <List component="div" disablePadding>
                <ListItem
                  button
                  component={Link}
                  to="/dailyattendance"
                  className={classes.menuItem}
                >
                  <ListItemIcon className={classes.menuItemIcon}>
                <IconBarChart />
              </ListItemIcon>
                  <ListItemText className="font-weight-light" primary="RFID-Users" />
                </ListItem>

                <ListItem
                  button
                  component={Link}
                  to="/weekattendance"
                  className={classes.menuItem}
                >
                  <ListItemIcon className={classes.menuItemIcon}>
                <IconBarChart />
              </ListItemIcon>
                  <ListItemText className="font-weight-light" primary="Time-Limit" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/monthattendance"
                  className={classes.menuItem}
                >
                  <ListItemIcon className={classes.menuItemIcon}>
                <IconBarChart />
              </ListItemIcon>
                  <ListItemText className="font-weight-light" primary="Admin-users" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Routing></Routing>

          <StickyFooter></StickyFooter>
        </main>
      </BrowserRouter>
    </div>
  );
}
