import React from "react";
import "./css.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const TikTokIcon = ({ color = "white" }) => {
  return (
    <svg
      fill={color}
      xmlns="https://www.tiktok.com/@totalprowess_ec?_t=8WfSUUREkkf&_r=1"
      viewBox="0 0 50 50"
      width="100%"
      height="100%">
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};

export const NavbarRedes = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bgnavbar2 justify-content-end">
        <ul className="navbar-nav redesItems">
          <li className="nav-item">
            <a
              href="https://twitter.com/ProwessEc"
              target={"_blank"}
              className="nav-link py-0"
              rel="noreferrer">
              <TwitterIcon style={{ color: "white" }} />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.facebook.com/prowess.ec"
              target={"_blank"}
              className="nav-link py-0"
              rel="noreferrer">
              <FacebookIcon style={{ color: "white" }} />
            </a>
          </li>
          <li className="nav-item ">
            <a
              href="https://instagram.com/prowess_ec?igshid=YmMyMTA2M2Y="
              target={"_blank"}
              className="nav-link py-0"
              rel="noreferrer">
              <InstagramIcon style={{ color: "white" }} />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.tiktok.com/@totalprowess_ec?_t=8WfSUUREkkf&_r=1"
              target={"_blank"}
              className="nav-link py-0"
              rel="noreferrer">
              <div style={{ width: "25px" }}>
                <TikTokIcon style={{ color: "white" }} />
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
