import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from "./pages/users";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Users />
        </Route>
      </Router>
    </div>
  );
}

export default App;
