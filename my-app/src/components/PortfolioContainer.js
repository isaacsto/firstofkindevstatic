
import React, { useState } from 'react'
/* import { BrowserRouter as Router, Route } from 'react-router-dom'; */
import Home from "./pages/Home"
import Navbar from "./Navbar";
/* import Header from "./pages/Header";  */
import Projects from "./pages/Projects";
/* import Footer from "./pages/Footer"; */
import About from "./pages/About";
import Contact from "./pages/Contact";


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
