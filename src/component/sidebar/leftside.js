import React from "react";
import './leftside.css';
import studentLogo from "../../components/Images/Student_Network2.png";

export default function leftside(){
    return(
        <div className='leftmain'>

            <img src={studentLogo}  style={{marginTop:"15%" ,width:"100%"}} alt="Student Network"/>
        </div>
    )
}
