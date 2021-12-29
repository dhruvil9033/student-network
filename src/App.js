import React from "react";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from './components/Login';
import Register from './components/Register';
import Valid from './components/validate';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/login"}><b >Student Network</b></Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/signup"}>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path="/" component={ Login }/>
                <Route path="/login" component={ Login }/>
                <Route path="/signup" component={ Register }/>
              </Switch>
            </div>
          </div>
        </Router>
    </div>
  );
}

export default App;
