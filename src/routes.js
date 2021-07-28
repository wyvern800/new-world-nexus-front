import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Build from "./pages/builds/Build";
import Article from "./pages/articles/Article";
import Articles from "./pages/articles/Articles";

export default function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Home} />

        {/** builds **/}
        <Route path="/builds" exact component={Build} />

        {/** articles **/}
        <Route exact path="/articles" component={Articles} />
        <Route path="/articles/:id" component={Article} />
    </Switch>
  );
}
