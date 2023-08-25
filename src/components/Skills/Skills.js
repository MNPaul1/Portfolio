import React, { useState } from "react";
import "./Skills.css";
import data from "../../data.json";

export const Skills = () => {
  const { Skills } = data;
  const [skill, setSkill] = useState("Python");
  const handleClick = (e) => {
    const { id } = e.target;
    setSkill(id);
  };
  return (
    <div className="inner-container skills-container">
      <div className="left-container center" id="sub-skill-container">
        <h2 className="customized-heading-color">{skill}</h2>
        <div className="grid center" id="skill-level">
          {Skills.map(
            (item) =>
              item.name === skill &&
              item.subSkills.map((subSkill, key) => (
                <nav key={key} id="sub-skill">{subSkill}</nav>
              ))
          )}
        </div>
      </div>
      <div className="right-container center">
        <h1 className="customized-heading-color">expertise</h1>
        <div className="skills grid center">
          {Skills.map((item, key) => (
            <nav
              key={key}
              onClick={handleClick}
              id={item.name}
              className={skill === item.name ? "active" : ""}
            >
              {item.name}
            </nav>
          ))}
        </div>
      </div>
    </div>
  );
};
