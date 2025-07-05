import React from "react";
import "./Hero.css";
import hero from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <h1 className="hero_header">
          Empower your Workforce{" "}
          <span>
            {" "}
            Transforming <br />
            Your Buisness
          </span>{" "}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quasi
          error numquam possimus atque harum quod.
        </p>
        <div className="hero_btn">
          <button className="cta-btn">Get started</button>
        </div>
        <div className="icons"></div>
        <img
          className="hero_img"
          src={hero}
          alt="some groop of random people"
        />
      </div>
    </div>
  );
};

export default Hero;
