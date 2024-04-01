import React from "react";

import { Link } from "react-router-dom";

import "../App.css";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/Home">Home</Link>
      </li>


      <li className="nav-item">
        <Link to="/Projects">Projects</Link>
      </li>
      <li className="nav-item">
        <Link to="/Resume">Resume</Link>
      </li>
      {/* <li className="nav-item">
        <Link to="/Contact">Contact</Link>
      </li> */}
    </ul>
  );
}

export default Navbar;
