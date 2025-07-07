import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_content">
          <h2>Seamfull HR</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            voluptate ipsam est corrupti unde aliquam?
          </p>
        </div>
        <div className="footer_info">
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
            <li>Resoursec</li>
          </ul>
        </div>
        <div className="footer_support">
          <ul>
            <li>FAQ’s</li>
            <li>Private</li>
            <li>Advertise</li>
            <li>Term of use</li>
          </ul>
        </div>
        <div className="footer_socials">
          <FaFacebook className="social_icon" />
          <BsTwitterX className="social_icon" />
          <BsLinkedin className="social_icon" />
          <BsInstagram className="social_icon" />
        </div>
      </div>
      <div className="copy">
        <hr />
        <p>Copyright and bla bla bla</p>
      </div>
    </div>
  );
};

export default Footer;
