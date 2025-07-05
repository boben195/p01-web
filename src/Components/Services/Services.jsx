import React from "react";
import "./Services.css";
import { services } from "../data";

const Services = () => {
  return (
    <div>
      <div className="services" id="services">
        <h2 className="servic_header">What We Offer</h2>
        <p className="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae,
          quasi?
        </p>
        <div className="service_container">
          {services.map(({ icon, head, desc }) => {
            return (
              <div className="servise_list">
                <div className="service_icon">
                  <h2 className="icon">{icon}</h2>
                </div>
                <h2>{head}</h2>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
