import React from "react";
import { useRef } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./register.css";
import studentLogo from "../../assests/Images/Student_Network1.png";
// import {validateEmail} from "./validate";

export default function Register(){

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        // if (passwordAgain.current.value !== password.current.value) {
        //     passwordAgain.current.setCustomValidity("Passwords don't match!");
        // } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post("/users/register", user);
                history.push("/login");
            } catch (err) {
                console.log(err);
            }
        // }
    };

    return(
        <div className="login">
            <div className="loginWrapper">
                {/*<div className="loginLeft">*/}
                    {/*<h3 className="loginLogo">Lamasocial</h3>*/}
          {/*          <span className="loginDesc">*/}
          {/*  Connect with friends and the world around you on Lamasocial.*/}
          {/*</span>*/}
          {/*      </div>*/}
                <div className="loginRight">
                    <div className="loginBox1">
                    <form onSubmit={handleClick}>
                        <div align="center">
                            <img src={studentLogo} style={{width:"60%"}} alt="Student Network"/>
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
                            Sign Up
                        </button>

                    </form>
                    <div align="center">
                        <a href="/login">
                            <button className="loginRegisterButton">Log into Account</button>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
