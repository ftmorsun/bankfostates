import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Register from "./register/Register";
import Login from "./login/Login";
import Home from "./home/Home";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <h1>Logout</h1>
          </Route>
          <Route path="/register">
            <Register />
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