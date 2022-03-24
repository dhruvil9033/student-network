import "./topbar.css";
import "./list.css";
import React from "react";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";


export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [isShown, setIsShown] = useState(true);

  const handleClick = async (e) => {
    e.preventDefault();

    localStorage.clear();
    if (localStorage.getItem("user") === null) {
      window.location.reload();
    }
  };

  // return (
  //   <div className="topbarContainer">
  //     <div className="topbarLeft">
  //       <Link to="/" style={{ textDecoration: "none" }}>
  //         <span className="logo">STUDENT NETWORK</span>
  //       </Link>
  //     </div>
  //
  //     <div className="topbarRight">
  //       <div className="topbarLinks">
  //         {/* <span className="topbarLink">Homepage</span>
  //         <span className="topbarLink">Timeline</span> */}
  //       </div>
  //       <div className="topbarIcons">
  //         <div className="topbarIconItem">
  //           {/* <Person />
  //           <span className="topbarIconBadge">1</span> */}
  //         </div>
  //         <div className="topbarIconItem">
  //           {/* <Chat />
  //           <span className="topbarIconBadge">2</span> */}
  //         </div>
  //         <div className="topbarIconItem">
  //           {/* <Notifications />
  //           <span className="topbarIconBadge">1</span> */}
  //         </div>
  //       </div>
  //
  //       {/* <Link to={`/profile/${user.username}`}> */}
  //       <a
  //         href={`/profile/${user.username}`}
  //         onMouseOver={() => setIsShown(true)}
  //       >
  //         <img
  //           // src={
  //           //   user.profilePicture
  //           //     ? PF + user.profilePicture
  //           //     : PF + "person/noAvatar.png"
  //           // }
  //           src={
  //             user.avatar
  //             // "https://png.pngitem.com/pimgs/s/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
  //           }
  //           alt=""
  //           className="topbarImg"
  //         />
  //       </a>
  //       {isShown && (
  //         <div>
  //           <ul onMouseLeave={() => setIsShown(true)}>
  //             <li>
  //               <a href={`/profile/${user.username}`}>View Profile</a>
  //             </li>
  //             <li>
  //               <a href="#" onClick={handleClick}>
  //                 Logout
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
  //



  const authLinks = (
      <ul>
        <li>
          <Link to="/profiles">Students</Link>
        </li>
        <li>
          <Link to="/department">Department</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="fas fa-user" />{" "}
            <span className="hide-sm">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to={`/profile/${user.username}`}>
            <i className="fas fa-user" /> <span className="hide-sm">Profile</span>
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} >
            <i className="fas fa-sign-out-alt"></i>{" "}
            <span className="hide-sm">Logout</span>{" "}
          </Link>
        </li>
      </ul>
  );

  const guestLinks = (
      <ul>
        <li>
          <Link to="/profiles">Students</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
  );

  return (
      <nav className="navbar bg-dark">
        <h2>
          <a href="/">
            <i className="fas fa-code"></i> STUDENT NETWORK
          </a>
        </h2>
        {user ? authLinks : guestLinks}

      </nav>
  );
}
