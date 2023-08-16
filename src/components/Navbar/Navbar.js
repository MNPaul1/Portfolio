import React, { Fragment } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
export const Navbar = () => {
  const currentLocation = useLocation().pathname.slice(1);
  const Page = currentLocation === "" ? "home" : currentLocation;

  const handleClick = (e) => {
    const navItems = document.getElementsByName("nav-item");
    navItems.forEach((item) => item.classList.remove("active"));
    const element = e.target;
    element.className !== ""
      ? element.classList.remove("active")
      : element.classList.add("active");
  };
  return (
    <Fragment>
      <div className="Navbar center">
        <Link
          to="/home"
          name="nav-item"
          id="home"
          className={`${"home" === Page ? "active" : ""}`}
          onClick={handleClick}
        >
          HOME
        </Link>
        <Link
          to="skills"
          name="nav-item"
          id="skills"
          className={`${"skills" === Page ? "active" : ""}`}
          onClick={handleClick}
        >
          SKILLS
        </Link>
        <Link
          to="projects"
          name="nav-item"
          id="projects"
          className={`${"projects" === Page ? "active" : ""}`}
          onClick={handleClick}
        >
          PROJECTS
        </Link>
      </div>
    </Fragment>
  );
};
