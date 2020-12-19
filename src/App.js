import Header from "./header/Header";
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    
    <Router>
    <div>
    <Header />
      <Switch>
            <div>
          <Route path="/login">Login</Route>
          <Route path="/register">Register</Route>
          <Route path="/">Home</Route>
        </div>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
