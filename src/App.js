import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Appoinment from "./pages/Appoinment/Appoinment/Appoinment";
import Home from "./pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/appoinment">
            <Appoinment></Appoinment>
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
