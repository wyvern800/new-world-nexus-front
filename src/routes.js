import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Builds from "./pages/Builds";
import Posts from "./pages/Posts";

export default function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/builds" exact component={Builds} />
        <Route path="/posts/:id" component={Posts} />
    </Switch>
  );
}
