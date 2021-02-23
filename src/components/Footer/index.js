import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
<nav className="navbar fixed-bottom navbar-light bg-light">
  <div className="container-fluid">
  <div className="inner">
    <p><a href="https://github.com/HannahStarcevich" className="icon brands alt fa-github"><span
                                className="label">GitHub</span></a></p>
    <p><a href="https://www.linkedin.com/in/hannah-starcevich/"
                            className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></p>
    <p>&copy; Hannah Starcevich</p>
    </div>
  </div>
</nav>
  );
}

export default Navbar;