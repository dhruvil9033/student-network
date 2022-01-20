import React from "react";
import {Link} from "react-router-dom";
import studentim from "../../components/Images/StudentNetwork.png";
import './topbar.css';

export default function topbar(){
    return(
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
    )
}

