import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Builds from "./pages/Builds";

export default function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/builds" exact component={Builds} />
    </Switch>
  );
}
