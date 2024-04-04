import React from "react";

import { Link } from "react-router-dom";

import "../App.css";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to="/Home">Home</Link>
      </li>
<li className="nav-item"> <a href="#about">About</a></li>
<li className="nav-item"> <a href="#work">Work</a></li>
      <li className="nav-item">
        <Link to="/Resume">Resume</Link>
      </li>
    </ul>
  );
}

export default Navbar;
