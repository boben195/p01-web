import React from "react";
import "./About.css";
import img from "../../assets/about.jpg";
import { about_list } from "../data";

const About = () => {
  return (
    <div>
      <div className="about" id="about">
        <div className="left_side">
          <img src={img} alt="again, some random guys" />
        </div>
        <div className="right_side">
          <h2 className="right_header">About Us</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            molestias nulla quia et temporibus modi quasi saepe veniam quisquam,
            architecto corrupti beatae nisi nihil natus veritatis magni
            repellendus illum, aspernatur non eius maxime molestiae! Quibusdam.
          </p>
          {about_list.map(({ icon, title }) => {
            return (
              <div className="list_comtainer">
                <div className="list">
                  <h2 className="icon">{icon}</h2>
                  <p>{title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
