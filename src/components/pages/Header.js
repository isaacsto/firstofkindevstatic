import React from 'react';
import Navbar from '../Navbar'; 

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="header-body">
  
        <h1 className="name">Isaac</h1>
        <h2 className="title">Web Developer</h2>

      <div className="nav-wrap">
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} /> 
      </div>
    </div>
  );
}

export default Header;
