import React from 'react';
import Navbar from '../Navbar'; 

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="header-body" id="header">
  
        <h1 className="name">First of Kind Development and Design</h1>
        <h2>Isaac Stofko</h2>
        <h2 className="title">Full Stack Web Developer</h2>

      <div className="nav-wrap">
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} /> 
      </div>
    </div>
  );
}

export default Header;
