import React, { useState } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import "./register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const [emailExist, setEmailExist] = useState(false);
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  const [isFetching, setIsFetching] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();

    if (password.current.value === passwordAgain.current.value) {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      setIsFetching(true);
      const res = await axios.post("/users/register", user);
      setIsFetching(false);
      if (res.data.EMAIL_EXIST) {
        setEmailExist(true);
      } else {
        history.push("/login");
      }
    } else {
      alert("Password Doesn't Match, Please Re-Enter Correct Password..");
    }
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
          <div className="loginBox1">
            <form onSubmit={handleClick}>
              <div align="center">
                <img
                  src="Images/Student_Network1.png"
                  style={{ width: "60%" }}
                  alt="Student Network"
                />
              </div>
              <input
                placeholder="Username"
                required
                ref={username}
                className="loginInput"
              />
              <input
                placeholder="Email"
                required
                ref={email}
                className="loginInput"
                type="email"
              />
              {emailExist && (
                <p
                  style={{
                    color: "red",
                    marginTop: "-17px",
                    marginLeft: "5px",
                  }}
                >
                  Email already exist...
                </p>
              )}
              <input
                placeholder="Password"
                required
                ref={password}
                className="loginInput"
                type="password"
                minLength="6"
              />
              <input
                placeholder="Password Again"
                required
                ref={passwordAgain}
                className="loginInput"
                type="password"
              />
              <button className="loginButton" type="submit">
                {isFetching ? (
                  <CircularProgress color="secondary" size="20px" />
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>
            <div align="center">
              <a href="/login">
                <button className="loginRegisterButton">
                  Log into Account
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
