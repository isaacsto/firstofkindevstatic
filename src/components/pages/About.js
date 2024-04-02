import React from "react";
import "../../App.css";


function About() {
  return (

    <div id="aboutDiv" >
   
<div class="aboutIntro">
    <h1 className="about-me-name">Isaac</h1>
      <h2 className="pro-title"> Web Developer</h2>
      </div>
     
      <div className="about-body"> 
      <div className="main-about">

<p>
  I am a full stack web developer equipped with a robust educational and
  professional foundation in English Literature, Creative Writing, Art History, Hospitality, and Team Management. I am passionate about creating beautiful and user friendly UIs and mobile-first frontend development. I am equally passionate about utilizing backend frameworks and libraries to create dynamic, scalable, and streamlined backends, seeking to balance style with utility. 
  </p>
  <p>
  I possess comprehensive knowledge of JavaScript, React, Node.js, MongoDB, REST APIs, CSS, HTML, and SQL among other languages and technologies. 
  <br></br>
  I am especially interested in exploring AI and music software including DAWs/plugins as I move through my career. 
  </p>
  <p>
  I eagerly anticipate integrating my imaginative and analytical mindset
  into the technology industry, as I embark on an interdisciplinary
  approach to problem-solving, creating, and innovating. 
</p>
</div>
      <div className="image-container">
          <img
            src="https://i.imgur.com/gylZ6Zs.jpg"
            alt="" 
            className="my-pic" width="150" 
          />
      </div>
    
  
  
        </div>
</div>

  );
}

export default About;
