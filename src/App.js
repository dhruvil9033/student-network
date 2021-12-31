import React from "react";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from './components/Login';
import Register from './components/Register';
import Forgotpw from './components/forgotpassword';
import Home1 from './components/Home1';
import studentim from './components/StudentNetwork.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //       .then((res) => res.json())
  //       .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">

            <div className="container">
              <div className="navbar-brand">
              <Link  to={"/login"}>
                <img src={studentim} className="lgimage" alt="studentNetwork"/>
              </Link>
              </div>
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
                <Route path="/forgotpass" component={ Forgotpw }/>
                <Route path="/home1" component={ Home1 }/>
              </Switch>
              {/*<p>{!data ? "Loading...": data}</p>*/}
            </div>
          </div>
        </Router>
    </div>
  );
}

export default App;
