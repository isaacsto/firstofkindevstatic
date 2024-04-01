
import React, { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home"
import Navbar from "./Navbar";
import Projects from "./pages/Projects";
import Footer from "./Footer";

//import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

import '../App.css';



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');



  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <body className="portfolioCont">
      <Router>
      <head>
<link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto:wght@900&family=Titillium+Web:wght@300;900&display=swap" rel="stylesheet"></link>
<script src="https://kit.fontawesome.com/1498603cf1.js" crossorigin="anonymous"></script>
</head>



<Routes initialPath="/Home">

<Route path="/React-Portfolio" element={<Home/>} />
</Routes>
<Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

<Routes> 
<Route path="/" element={<Home />} />
<Route path="/Home" element={< Home/>}/>

  
  <Route path="/Projects" element={< Projects />} />
  <Route path="/Resume" element={<Resume />} />
</Routes>
     
    {/*  {renderPage()}  */}

      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
      
      </Router>
    </body>
  );
}
