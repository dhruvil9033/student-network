import React, {Fragment, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import Register from "./pages/register/Register";
import Forgotpw from "./pages/forgotpass/forgotpassword";
import Home1 from "./pages/home/Home1";
import Reset from "./pages/forgotpass/resetpass";
import Profile from "./pages/profile/Profile";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile-form/CreateProfile";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import store from "../store";
import PrivateRoute from "./components/routing/PrivateRoute";
import {loadUser} from "./actions/auth";
import Topbar from "./components/topbar/Topbar";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //       .then((res) => res.json())
  //       .then((data) => setData(data.message));
  // }, []);
  const { user } = useContext(AuthContext);
  console.log(user);
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);
  return (
    // <div className="App">
    <Router>

      {/*<Route exact path='/' component={Landing} />*/}
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

        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/create-profile" component={CreateProfile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/forgotpass" component={Forgotpw} />
        <Route path="/home1" component={Home1} />
        <Route path="/reset" component={Reset} />
        <Route path="/profile" component={Profile} />
        <Route path="/logout" component={Logout} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute
            exact
            path='/create-profile'
            component={CreateProfile}
        />
      </Switch>
      </Router>
  );
}

export default App;
