import React from "react";
import studentLogo from "../../img/Student_Network1.png";
import { Link } from "react-router-dom";
import HomeImg from "../../img/home2.jpg";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/footer";

import "./home1.css";
export default function home1() {
  return (
    <>
      <Topbar />

      {/* <Feed /> 
      <Rightbar /> */}

      <div className="homex">
        <div className="container-home">
          <Sidebar />
          <div className="content-container">
            <img src={studentLogo} className="logo" />
            {/* <h1 className="large text-primary">Student Network</h1> */}
            <p className="lead">
              Create a profile/portfolio, share posts | Queries and get help
              from other Students, Faculties, Working Profationals
            </p>
            <div className="buttons">
              <Link to="/DashBoard" className="btn btn-primary">
                Create Profile
              </Link>
            </div>
          </div>
          <div className="bg-container glow">
            <img className="home_img glow" src={HomeImg} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
