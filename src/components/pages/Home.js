
import React from 'react'

import '../../App.css'

import About from './About'; 
import Projects from './Projects'; 


function Home() {

  return (
    <div class="wrap">
  <div id="work"> 

  <Projects />
  </div>

<div id="about">
<About/>
</div>
   
     </div>
  );
}

export default Home;