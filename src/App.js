import Header from "./header/Header";
import Home from "./home/Home";
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./about/About";



function App() {
  return (
    
  <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login">

          </Route>
          <Route path="/logout">
            <h1>Logout</h1>
          </Route>
          <Route path="/register">
  
          </Route>
          {/*This is Default Page */}
          <Route path="/">
            <Home />
      
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
