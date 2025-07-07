import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Steps from "./Components/Steps/Steps";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import Feedback from "./Components/Feedback/Feedback";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Steps />
      <Services />
      <About />
      <Team />
      <Feedback />
      <Contact />
    </div>
  );
};

export default App;
