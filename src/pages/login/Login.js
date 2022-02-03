import React from "react";
import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Student Network</h3>
          <span className="loginDesc">
            Connect with friends and faculties on Student Network.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox2">
            <form onSubmit={handleClick}>
              <div align="center">
                <img
                  src="Images/Student_Network1.png"
                  style={{ width: "60%" }}
                  alt="Student Network"
                />
              </div>
              <input
                placeholder="Email"
                type="email"
                required
                className="loginInput"
                ref={email}
              />
              <input
                placeholder="Password"
                type="password"
                required
                minLength="6"
                className="loginInput"
                ref={password}
              />
              <button
                className="loginButton"
                type="submit"
                disabled={isFetching}
              >
                {isFetching ? (
                  <CircularProgress color="primary" size="20px" />
                ) : (
                  "Log In"
                )}
              </button>
            </form>
            <span className="loginForgot">
              <a href="/forgotpass">Forgot Password?</a>
            </span>
            <div align="center">
              <a href="/signup">
                <button className="loginRegisterButton">
                  Create a New Account
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
