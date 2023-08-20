import React, { useState } from "react";
import "./Projects.css";
import data from "../../data.json";
import LaunchIcon from '@mui/icons-material/Launch';
export const Projects = () => {
  const { projects } = data;
  const [project, setProject] = useState(projects[0]);
  const handleClick = (e) => {
    const { id } = e.target;
    setProject(projects.filter((project) => project.name === id)[0]);
  };

  const handleMouseEnter = () => {
    const descriptionElement = document.getElementsByClassName(
      "project-description"
    )[0];
    descriptionElement.style.display = "flex";
  };
  const handleMouseLeave = () => {
    const descriptionElement = document.getElementsByClassName(
      "project-description"
    )[0];
    descriptionElement.style.display = "none";
  };

  return (
    <div className="inner-container">
      <div className="left-container center">
        <div className="card center">
          <img
            src={project.imgLink}
            alt=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div
            className="project-description center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p>{project.description}</p>
          </div>
        </div>
      </div>
      <div className="right-container center">
        <h1 className="customized-heading-color">Projects</h1>
        <div className="projects-container">
          {projects.map((item, key) => (
            <nav
              key={key}
              onClick={handleClick}
              id={item.name}
              className={project.name === item.name ? "active" : ""}
            >
              {item.name} <LaunchIcon onClick={() => {window.open(item.link, '_blank'); window.location.reload(false)}} />
            </nav>
          ))}
        </div>
      </div>
    </div>
  );
};
