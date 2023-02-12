import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact="/" component={StorePicker}></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
