import React from 'react';
import '../../App.css'

import About from './About'; 
import Projects from './Projects'; 


function Home() {
  return (
    <div class="wrap">
  
      <div className="home-body">
           
<div class="aboutIntro">
    <h1 className="about-me-name">Isaac</h1>
      <h2 className="pro-title"> Web Developer</h2>
     
      </div>
      </div>
<Projects />
<div id="about">
<About/>
</div>
   
     </div>
  );
}

export default Home;