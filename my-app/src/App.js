import React from "react";
/* import { BrowserRouter as Router, Route } from 'react-router-dom'; */
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

import './App.css';

function App() {
  return (
    <div>
    {/*   <Router> */}
      < Navbar />
    {/*   </Router> */}
      < Header />
      < Section/>
      < About />
      < Contact />
      < Footer />
    </div>
     
  );
}

export default App;  
