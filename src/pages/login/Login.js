import React from "react";
import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import studentLogo from "../../assests/Images/Student_Network1.png";

export default function Login() {

    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            {email: email.current.value, password: password.current.value},
            dispatch
        );
    };



    return(
        <div className="login">
            <div className="loginWrapper">
          {/*      <div className="loginLeft">*/}
          {/*          <h3 className="loginLogo">Lamasocial</h3>*/}
          {/*          <span className="loginDesc">*/}
          {/*  Connect with friends and the world around you on Lamasocial.*/}
          {/*</span>*/}
          {/*      </div>*/}
                <div className="loginRight">
                    <div className="loginBox2">
                    <form onSubmit={handleClick}>
                        <div align="center">
                            <img src={studentLogo} style={{width:"60%"}} alt="Student Network"/>
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
                        <button className="loginButton" type="submit" disabled={isFetching}>
                            {isFetching ? (
                                <CircularProgress color="white" size="20px" />
                            ) : (
                                "Log In"
                            )}
                        </button>

                    </form>
                    <span className="loginForgot"><a href="/forgotpass">Forgot Password?</a></span>
                        <div align="center">
                            <a href="/signup">
                                <button className="loginRegisterButton">Create a New Account</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

