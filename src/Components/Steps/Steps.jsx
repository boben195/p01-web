import React from "react";
import "./Steps.css";

const Steps = () => {
  return (
    <div>
      <div className="how-we-work">
        <h2>How We Work</h2>
        <div className="steps">
          <div className="step">
            <div className="icon-background">
              <h2 className="num">1</h2>
            </div>
            <h3>Consultation</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              nemo ipsam error esse aliquid laborum? Quis totam dignissimos
              incidunt nobis?
            </p>
          </div>
          <div className="step">
            <div className="icon-background">
              <h2 className="num">2</h2>
            </div>
            <h3>Strategy Development</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              nemo ipsam error esse aliquid laborum? Quis totam dignissimos
              incidunt nobis?
            </p>
          </div>
          <div className="step">
            <div className="icon-background">
              <h2 className="num">3</h2>
            </div>
            <h3>Ongoing Support</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              nemo ipsam error esse aliquid laborum? Quis totam dignissimos
              incidunt nobis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
