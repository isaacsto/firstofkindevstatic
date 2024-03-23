import React from "react";
import "../../App.css";


function About() {
  return (

    <div id="aboutDiv" >
   
<div class="aboutIntro">
    <h1 className="about-me-name">Isaac Stofko</h1>
      <h2 className="pro-title"> Full Stack Web Developer</h2>
      </div>
      <div className="about-body-wrap">
      <div className="about-body"> 
      <div className="image-container">
          <img
            src="https://i.imgur.com/gylZ6Zs.jpg"
            alt="" 
            className="my-pic" width="200"
          />
      </div>
    
  
     <div className="main-about">

        <p>
          I am a full stack web developer equipped with a robust educational and
          professional foundation in English Literature, Creative Writing, Art History, Hospitality, and Team Management. I am passionate about creating beautiful and user friendly UIs and mobile-first frontend development. I am equally passionate about utilizing backend frameworks and libraries to create dynamic, functional, and streamlined backends in order to connect  
          
          I possess comprehensive knowledge of JavaScript, React, Node.js, MongoDB, REST APIs, CSS, HTML, and SQL among other languages and technologies. 

          My special interests include AI and music software including DAWs and special affect plugins. 

          I eagerly anticipate integrating my imaginative and analytical mindset
          into the technology industry, as I embark on an interdisciplinary
          approach to problem-solving, creating, and innovating. 
        </p>
        </div>
        </div>
</div>
</div>
  );
}

export default About;
