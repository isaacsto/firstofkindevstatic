
import React, { useState } from 'react'
import Home from "./pages/Home"
import Navbar from "./Navbar";
import Projects from "./pages/Projects";
import Footer from "./Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

import '../App.css';



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="portfolioCont">
      <head>

<link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto:wght@900&family=Titillium+Web:wght@300;900&display=swap" rel="stylesheet"></link>
<script src="https://kit.fontawesome.com/1498603cf1.js" crossorigin="anonymous"></script>
</head>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()} 

      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
      
    
    </div>
  );
}
