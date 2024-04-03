import React from 'react';
import '../../App.css'

import About from './About'; 


function Home() {
  return (
    <div class="wrap">
  
      <div className="home-body">
           
<div class="aboutIntro">
    <h1 className="about-me-name">Isaac</h1>
      <h2 className="pro-title"> Web Developer</h2>
      </div>
      </div>

     <About/>
     </div>
  );
}

export default Home;