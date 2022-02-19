import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../login/Login";
import Play from "../play/Play"
import Signup from "../signup/Signup"

/**
 * Defines every path of the application.
 * 
 */

function Routes() {
  return (
    <Switch>
      <Route path="/play">
        <Play />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default Routes;
