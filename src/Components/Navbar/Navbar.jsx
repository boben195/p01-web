import React, { useState } from "react";
import "./Navbar.css";
import { TiTimes } from "react-icons/ti";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <h2>SeamFull HR</h2>
        </div>
        <div
          className={mobile ? "nav-links" : "links"}
          onClick={() => setMobile(false)}
        >
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="btn">
          <a href="#">
            <button>Contact Us</button>
          </a>
        </div>
        <button className="toggle" onClick={() => setMobile(!mobile)}>
          {mobile ? (
            <TiTimes className="close_icon" />
          ) : (
            <BiMenu className="open_icon" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
