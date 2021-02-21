import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { classicNameResolver } from "typescript";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
}));

const Signin: React.FunctionComponent = () => {
  const classes = useStyles();
  return <div className={classes.root}>signin</div>;
};

export default Signin;
