import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn } from "@mui/icons-material";
import "./Layout.css";
import { Home } from "../Home/Home";
import { Skills } from "../Skills/Skills";
import { Projects } from "../Projects/Projects";
import { Link } from "react-router-dom";

export const Layout = ({ page }) => {
  return (
    <div className="container gradient-border">
      <div className="icons logo">
        <img className="logo-img" src="/logo.png" alt="" />
      </div>
      {page === "home" && <Home />}
      {page === "skills" && <Skills />}
      {page === "projects" && <Projects />}
      <div className="icons social-links center">
        <Link to="https://github.com/MNPaul1" target="_blank">
          <GitHubIcon />
        </Link>
        <Link to="https://www.linkedin.com/in/mahanandan-paul-77656a204/" target="_blank">
          <LinkedIn />
        </Link>
      </div>
      <footer>Design by: Mahanandan</footer>
    </div>
  );
};
