import React from 'react';
import { Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pages from "./routes/Pages";
import history from "./history";

const App = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Route component={Pages} />
    </Router>
  )
}

export default App;
