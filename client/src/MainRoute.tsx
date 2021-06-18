import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Signin from "./user/Signin";
import Signup from "./user/Signup";

const MainRoute: React.FunctionComponent = () => {
  return (
    <div>
      <Menu></Menu>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  );
};

export default MainRoute;
