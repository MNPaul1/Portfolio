import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn } from "@mui/icons-material";
import "./Layout.css";
import { Home } from "../Home/Home";
import { Skills } from "../Skills/Skills";
import { Projects } from "../Projects/Projects";
import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from "react-router-dom";
import { Contact } from "../Contact/Contact";
export const Layout = ({ page }) => {
  const navigate = useNavigate()
  return (
    <div className="container gradient-border">
      <div className="icons logo">
        <img className="logo-img" src="/logo.png" alt="" onClick={() => navigate("/")} />
      </div>
      {page === "home" && <Home />}
      {page === "skills" && <Skills />}
      {page === "projects" && <Projects />}
      {page === "contact" && <Contact />}
      <div className="icons social-links center">
      <Link to="/contact">
          <EmailIcon />
        </Link>
        <Link to="https://github.com/MNPaul1" target="_blank">
          <GitHubIcon />
        </Link>
        <Link to="https://www.linkedin.com/in/mahanandan-paul-77656a204/" target="_blank">
          <LinkedIn />
        </Link>

      </div>
    </div>
  );
};
