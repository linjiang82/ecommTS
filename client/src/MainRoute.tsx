import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Signin from "./user/Signin";

const MainRoute: React.FunctionComponent = () => {
  return (
    <div>
      <Menu></Menu>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={Signin} />
      </Switch>
    </div>
  );
};

export default MainRoute;
