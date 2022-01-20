import React from "react";
// import studentLogo from '../../../public/Images/Student_Network2.png';

import Topbar from '../../components/topbar/Topbar';
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import './home1.css';
export default function home1(){
    return(
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                {/*<Rightbar/>*/}
                <Feed/>
            </div>
        </>
    );
}
