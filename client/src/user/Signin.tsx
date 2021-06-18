import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
}));

const Signin: React.FC = () => {
  const classes = useStyles();
  return <div className={classes.root}>signin</div>;
};

export default Signin;
