import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../../App.css'

import About from './About'; 

const style = {
  containerStyle: {
   
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
  }
}


function Home() {
  return (
    <div>
      <div className="home-body">
      </div>
     <About/>
     </div>
  );
}

export default Home;