import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <h2>SeamFull HR</h2>
        </div>
        <div className="links">
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
      </div>
    </div>
  );
};

export default Navbar;
