import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
// import studentLogo from "../../../public/Images/Student_Network1.png";
import { CircularProgress } from "@material-ui/core";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls";
import axios from "axios";
import "./resetpass.css";

export default function Reset() {
  const queryParams = new URLSearchParams(window.location.search);
  const email = queryParams.get("email");
  const password = useRef();
  const cfpassword = useRef();
  const history = useHistory();
  const handleClick = async (e) => {
    e.preventDefault();

    if (password.current.value == cfpassword.current.value) {
      const user = {
        password: password.current.value,
        email: email,
      };
      try {
        await axios.put(`/users/resetpassword`, user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please re-enter Correct Password..");
    }

    // loginCall(
    //     { email: email.current.value, password: password.current.value },
    //     dispatch
    // history.push("/login");
  };

  return (
    // <div className="auth-wrapper">
    //     <div className="auth-inner">
    // <form>
    //     <h3>Forgot Password</h3>
    //
    //     <div className="form-group">
    //         <label>Email address</label>
    //         <input type="email" className="form-control" placeholder="Enter email" />
    //     </div>
    //
    //     <button type="submit" className="btn btn-primary btn-block">Sent Mail</button>
    //     <p className="forgot-password text-right">
    //         Back to <a href="/login">Login?</a>
    //     </p>
    // </form>
    //     </div>
    // </div>

    <div className="login">
      <div className="loginWrapper">
        {/*      <div className="loginLeft">*/}
        {/*          <h3 className="loginLogo">Lamasocial</h3>*/}
        {/*          <span className="loginDesc">*/}
        {/*  Connect with friends and the world around you on Lamasocial.*/}
        {/*</span>*/}
        {/*      </div>*/}
        <div className="loginRight">
          <div className="loginBox3">
            <form onSubmit={handleClick}>
              <div align="center">
                <img
                  src="Images/Student_Network1.png"
                  style={{ width: "60%" }}
                  alt="Student Network"
                />
              </div>
              <input
                placeholder="Password"
                type="password"
                required
                className="loginInput"
                ref={password}
              />
              <input
                placeholder="Confirm Password"
                type="password"
                required
                className="loginInput"
                ref={cfpassword}
              />

              <button className="loginButton" type="submit">
                Submit
              </button>
            </form>
            {/*<span className="loginForgot">Back to <a href="/login">Login</a></span>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
