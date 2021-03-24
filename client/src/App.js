import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={["/", "/home"]} component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
