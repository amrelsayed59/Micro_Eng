import React, { lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import Details from "./modules/movies/Details";
//lazy Main Module
const movies = lazy(() => import("./modules/movies"));

const Routes: React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route component={movies} path="/" exact />
      <Route component={Details} path="/:id"/>
      {/* Error404 Routes */}
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
