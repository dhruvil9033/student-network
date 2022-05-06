import React, {Fragment, useContext} from "react";
import studentLogo from "../../img/Student_Network1.png";
import { Link } from "react-router-dom";
import HomeImg from "../../img/home2.jpg";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/footer";
import Profile from "../../pages/profile/Profile";

// import "./home1.css";
import {Card, CardContent} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import {AuthContext} from "../../context/AuthContext";
export default function Dashboard() {

  const { user } = useContext(AuthContext);

  return (
      <>
        <Topbar />
        <Fragment>
          <h1 className="large text-primary">Dashboard</h1>
          <p className="lead">
            {/*<i className="fas fa user"></i> WelCome {user && user.name}*/}
          </p>
          {Profile !== null ? (
              <Fragment>
                {/*<DashboardAction />*/}
                {/*<Experience experience={profile.experience} />*/}
                {/*<Education education={profile.education} />*/}
                <div className="my-2">
                  {/* <button className="btn btn-danger" onClick={() => deleteAccount()}>
                    <i className="fas fa-user-minus"></i> Delete my Account
                  </button> */}
                </div>
              </Fragment>
          ) : (
              <Fragment>
                {" "}
                <p>you have not yet setup a profile, please add some info</p>{" "}
                <Link to="/create-profile" className="btn btn-primary my-1">
                  Create Profile
                </Link>
                <button className="btn btn-danger" >
                  <i className="fas fa-user-minus"></i> Delete my Account
                </button>
              </Fragment>
          )}
        </Fragment>

      </>
  );
}








