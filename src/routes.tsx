import React, { lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import Index from "./modules/movies/Details";
//lazy Movies Module
const movies = lazy(() => import("./modules/movies"));

const Routes: React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route component={movies} path="/" exact />
      <Route component={Index} path="/:id" />
      {/* Error404 Routes */}
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
