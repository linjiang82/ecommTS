import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const Signup: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <Typography variant="h4">SignUp</Typography>
        <CardContent>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="With a grid" />
              </Grid>
            </Grid>
          </div>{" "}
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="With a grid" />
              </Grid>
            </Grid>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
