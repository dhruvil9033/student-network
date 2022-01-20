import React from "react";
import studentLogo from './Images/Student_Network2.png';
// import studentim from './StudentNetwork.png';
import Topbar from '../component/topbar/topbar';
import Leftside from  '../component/sidebar/leftside';
import './home1.css';
export default function home1(){
    return(
        <div>
            <Topbar/>
            <div className="mainhome">
            <Leftside/>
            <div className="home1">
                <img src={studentLogo}  style={{marginTop:"15%"}} alt="Student Network"/>
            </div>
            </div>
        </div>
    )
}
