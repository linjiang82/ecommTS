import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    // height: 30,
  },
}));

const Menu: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar}>
      <Toolbar>
        <Typography>Ecomm</Typography>
        <NavLink to="/">User</NavLink>
        <NavLink to="/device">Device</NavLink>
        <NavLink to="/signin">Signin</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
