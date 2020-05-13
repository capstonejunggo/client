import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Main = lazy(() => import("../components/pages/Main"));
const Login = lazy(() => import("../components/pages/Login"));

const Pages = () => {
  return (
    <Suspense fallback={<div id="loading"><img id="loading-image" src="images/loader.gif" alt="Loading..." /></div>}>
      <Switch>
        <Route path="/" exact={ true } component={ Main } />
        <Route path="/login" exact={ true } component={ Login } />
      </Switch>
    </Suspense>
  );
};

export default Pages;