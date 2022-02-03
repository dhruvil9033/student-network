import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import "./forgotpass.css";

export default function Forgotpw() {
  const email = useRef();
  const [isFetching, setIsFetching] = useState(false);

  const history = useHistory();
  const handleClick = async (e) => {
    e.preventDefault();
    const user = {
      email: email.current.value,
    };
    try {
      setIsFetching(true);
      const res = await axios.post("/users/forgotpassword", user);
      setIsFetching(false);

      if (res.data.status === false) {
        alert("Email Not Exist..");
      } else {
        history.push("/login");
      }
    } catch (err) {
      console.log(err);
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
          <div className="loginBox">
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

              <button className="loginButton" type="submit">
                {isFetching ? (
                  <CircularProgress color="secondary" size="20px" />
                ) : (
                  "Sent Mail"
                )}
              </button>
            </form>
            <span className="loginForgot">
              <a href="/login">Back to Login</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
