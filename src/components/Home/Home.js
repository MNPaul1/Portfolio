import React from "react";
import "./Home.css";
export const Home = () => {
  return (
    <div className="inner-container">
      <div className="left-container center">
        <h1 className="welcome-heading customized-heading-color">Welcome.</h1>
        <p className="intro-description">
          I am Mahanandan, a proficient Front-End Developer located in
          Vancouver, British Columbia, Canada. My professional journey has
          encompassed the creation of diverse web applications, including
          notable projects like LearnX. <br />
          <br />
          With an unwavering passion for crafting captivating digital
          experiences, I am equally enthralled by the intricate realm of API
          development. This confluence of expertise and enthusiasm defines my
          trajectory in the ever-evolving realm of technology.
        </p>
      </div>
      <div className="right-container center">
        <h1 className="customized-heading-color">Education</h1>
        <p className="gradient-border" id="education">
          - Associate Degree of Science in Computer Science.
          <br />
          3.23/4.3 GPA
          <br />
          <br />
          - High School Diploma major in Math and Science.
          <br />
          82.6%
        </p>
      </div>
    </div>
  );
};
