import React from "react";
import {BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Forgotpw from './pages/forgotpass/forgotpassword';
import Home1 from './pages/home/Home1';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //       .then((res) => res.json())
  //       .then((data) => setData(data.message));
  // }, []);
    const { user } = useContext(AuthContext);
  return (
    // <div className="App">
        <Router>
          {/*<div className="auth-wrapper">*/}
          {/*  <div className="auth-inner">*/}
              <Switch>
                  <Route exact path="/">
                      {user ? <Home1 /> : <Login />}
                  </Route>
                  <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
                  <Route path="/signup">
                      {user ? <Redirect to="/" /> : <Register />}
                  </Route>


                <Route exact path="/" component={ Login }/>
                <Route path="/login" component={ Login }/>
                <Route path="/signup" component={ Register }/>
                <Route path="/forgotpass" component={ Forgotpw }/>
                <Route path="/home1" component={ Home1 }/>

              </Switch>
              {/*<p>{!data ? "Loading...": data}</p>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </Router>
    // </div>
  );
}

export default App;
