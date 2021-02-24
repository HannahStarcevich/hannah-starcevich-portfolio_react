import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand"><Link to="/">Portfolio</Link></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
          
        <a className="nav-link"><Link to="/MyImpact">My Impact</Link></a>
        <a className="nav-link" href="https://github.com/HannahStarcevich">GitHub</a>
        <a className="nav-link" href="https://www.linkedin.com/in/hannah-starcevich/">LinkedIn</a>
        <a className="nav-link" href="src/Hannah-Starcevich_Resume_2-23.pdf">Resume</a>
        <a className="nav-link"><Link to="/Contact">Contact</Link></a>
      </div>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
