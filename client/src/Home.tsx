import React from "react";
import {
  AppBar,
  Container,
  Button,
  Paper,
  CardMedia,
  CardHeader,
  CardContent,
  Card,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import unicorn from "../../assets/img/unicornbike.jpg";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(8),
    background: theme.palette.background.default,
    color: theme.palette.primary.light,
  },
  cardmedia: {
    height: 600,
  },
}));

const Home: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia image={unicorn} className={classes.cardmedia}></CardMedia>
      <CardContent> Welcome to Ecomm</CardContent>
    </Card>
  );
};

export default Home;
