import React, { useEffect, useState } from "react";
import "./Projects.css";
import data from "../../data.json";
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from "react-router-dom";
export const Projects = () => {
  const { projects } = data;
  const [project, setProject] = useState({
    name:'', description:'', imgLink:'', link:'',
  })
  const {name, description, imgLink} = project||projects[0];
  const handleClick = (e) => {
    const { id } = e.target;
    setProject(projects.filter((item) => item.name === id)[0]);
  };

  useEffect(() =>{
    setProject(projects[0])
  },[projects])
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
            src={imgLink}
            alt={name}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div
            className="project-description center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p>{description}</p>
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
              className={`${name === item.name ? "active" : ""}`}
            >
              {item.name} <Link to={item.link} target="_blank" className="center"><LaunchIcon /></Link>
            </nav>
          ))}
        </div>
      </div>
    </div>
  );
};
