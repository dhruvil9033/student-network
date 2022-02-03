import React from "react";

import { Card, CardContent } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

import "./footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <hr />
        <p class="copyright"> Made With ❤️ By Raj Babriya & Dhruvil Gajera</p>
        <Card className="contactus">
          <CardContent className="contact">
            <div className="con">
              <a target="_blank" href="#" rel="noreferrer">
                {" "}
                <GitHubIcon />{" "}
              </a>
            </div>
            <div className="coni">
              <a target="_blank" href="#" rel="noreferrer">
                {" "}
                <LinkedInIcon />
              </a>
            </div>
            <div className="ins">
              <a target="_blank" href="#" rel="noreferrer">
                <InstagramIcon />
              </a>{" "}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
