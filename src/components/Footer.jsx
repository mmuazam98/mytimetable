import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../css/Footer.css";
const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/mmuazam98/mytimetable" target="_blank" rel="noreferrer">
        Contribute now <GitHubIcon />
      </a>
    </footer>
  );
};

export default Footer;
