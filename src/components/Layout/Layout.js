import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn } from "@mui/icons-material";
import "./Layout.css"
import { Home } from "../Home/Home";
import { Skills } from "../Skills/Skills";
import { Projects } from "../Projects/Projects";
export const Layout = ({page}) => {
  return (
    <div className="container gradient-border">
      <div className="icons logo">
        <img className="logo-img" src="/logo.png" alt="" />
      </div>
      {page==="home" && <Home />}
      {page==="skills" && <Skills />}
      {page==="projects" && <Projects />}
      <div className="icons social-links center">
        <GitHubIcon />
        <LinkedIn />
      </div>

    </div>
  );
};
