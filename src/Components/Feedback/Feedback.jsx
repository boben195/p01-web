import React from "react";
import "./Feedback.css";
import { feedback } from "../data";

const Feedback = () => {
  return (
    <div>
      <div className="feedback">
        <h5>Hear From Our Customs</h5>
        <div className="customers">
          {feedback.map(({ image, icon, name, company, comment }, index) => {
            return (
              <div key={index} className="item">
                <div className="user">
                  <img src={image} alt="some random icon" />
                  <div className="info">
                    <h5>{name}</h5>
                    <p>{company}</p>
                  </div>
                </div>
                <div className="comment">
                  <h2>{icon}</h2>
                </div>
                <p>{comment}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
