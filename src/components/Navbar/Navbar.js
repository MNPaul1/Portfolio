import React, { Fragment, useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
export const Navbar = () => {
  const currentLocation = useLocation().pathname.slice(1);
  const Page = currentLocation === "" ? "home" : currentLocation;
  const [menuToggle, setMenu] = useState("menu");
  const [width, setWidth] = useState(window.innerWidth);

  //active nav item handle
  const handleClick = (e) => {
    const navItems = document.getElementsByName("nav-item");
    navItems.forEach((item) => item.classList.remove("active"));
    const element = e.target;
    element.className !== ""
      ? element.classList.remove("active")
      : element.classList.add("active");
      setMenu("menu")
    if (window.innerWidth <= 900) {
      handleMenuClick();
    }
  };

  // handle menu icon on Click
  const handleMenuClick = () => {
    const navbar = document.getElementsByClassName("Navbar")[0];
    if (menuToggle === "menu") {
      navbar.style.display = "flex";
      setMenu("close");
    } else {
      navbar.style.display = "none";
      setMenu("menu");
    }
  };

  //Update Navbar style according the the width
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);
    const navbar = document.getElementsByClassName("Navbar")[0]
    width>=900?navbar.style.display = "flex":navbar.style.display = "none"
  }, [width]);
  return (
    <Fragment>
      <div className="Navbar center">
        <Link
          to="/home"
          name="nav-item"
          id="home"
          className={`nav-item ${"home" === Page ? "active" : ""}`}
          onClick={handleClick}
        >
          HOME
        </Link>
        <Link
          to="skills"
          name="nav-item"
          id="skills"
          className={`nav-item ${"skills" === Page ? "active" : ""}`}
          onClick={handleClick}
        >
          SKILLS
        </Link>
        <Link
          to="projects"
          name="nav-item"
          id="projects"
          className={`nav-item ${"projects" === Page ? "active" : ""}`}
          onClick={handleClick}
        >
          PROJECTS
        </Link>
      </div>
      {window.innerWidth <= 900 && (
        <Fragment>
          {menuToggle === "menu" && (
            <MenuIcon
              className="menu-icon"
              id="menu"
              onClick={handleMenuClick}
            />
          )}
          {menuToggle === "close" && (
            <ClearIcon
              className="menu-icon"
              id="close"
              onClick={handleMenuClick}
            />
          )}
        </Fragment>
      )}
    </Fragment>
  );
};
