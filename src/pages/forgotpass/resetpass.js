import React, { useContext, useRef, useState } from "react";
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
  const [isFetching, setIsFetching] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();

    if (password.current.value == cfpassword.current.value) {
      const user = {
        password: password.current.value,
        email: email,
      };
      try {
        setIsFetching(true);
        await axios.put(`/users/resetpassword`, user);
        setIsFetching(false);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please re-enter Correct Password..");
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
                {isFetching ? (
                  <CircularProgress color="secondary" size="20px" />
                ) : (
                  "Submit"
                )}
              </button>
            </form>
            {/*<span className="loginForgot">Back to <a href="/login">Login</a></span>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
