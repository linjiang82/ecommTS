import {
  Avatar,
  Button,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { list } from "./vvApi";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
  },
  deviceList: {
    maxHeight: 400,
    maxWidth: 200,
    overflow: "auto",
  },
}));
const Device: React.FC = () => {
  const classes = useStyles();
  const [devices, setDevices] = useState();
  const [error, setError] = useState();
  const [searchStr, setSearchStr] = useState("");
  const [filteredDevices, setFilteredDevices] = useState();

  const getList = async () => {
    list().then((res) => {
      if (res.error) {
        setError(res.error);
      } else {
        setDevices(res.data);
      }
    });
  };
  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.currentTarget.value);
  };
  useEffect(() => {
    if (devices) {
      let newDevices = devices.filter((device) => {
        console.log(
          device.deviceid + "  " + searchStr,
          +"  " + device.deviceid.includes(searchStr)
        );
        return device.deviceid.includes(searchStr);
      });
      console.log(newDevices);
      setFilteredDevices(newDevices);
    }
  }, [searchStr, devices]);
  return (
    <div className={classes.root}>
      <Button onClick={getList}>
        List Devices {filteredDevices ? filteredDevices.length : 0}
      </Button>
      <br />
      <InputLabel>Search</InputLabel>
      <TextField onChange={changeSearch}></TextField>
      {filteredDevices != undefined && (
        <Paper className={classes.deviceList}>
          <List>
            {filteredDevices.map((obj, i) => (
              <ListItem key={i}>
                <ListItemText>{filteredDevices[i].deviceid}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </div>
  );
};

export default Device;
