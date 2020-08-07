import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from "./pages/users";
import UserDetails from "./pages/userDetail";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/user/:userId" exact >
          <UserDetails />
        </Route>
      </Router>
    </div>
  );
}

export default App;
