import React from "react";


import "../App.css";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav">
     

<li className="nav-item"> <a href="#work">Work</a></li>
<li className="nav-item"> <a href="#resume">Resume</a></li>
<li className="nav-item"> <a href="#about">About</a></li>
<li className="nav-item"> <a href="#freelance">Consultation</a></li>
    </ul>
  );
}

export default Navbar;
