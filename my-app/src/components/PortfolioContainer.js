
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
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()} 

      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    
    </div>
  );
}
