import React from 'react';
import '../../App.css'


const styles = {
    imgStyle: {
        width: '70%',
        height: 'auto',
        margin: '100px',
    },
    headingStyle: {
      fontSize: '90px',
      display: 'flex',
      justifyContent: 'flex-end',
      float: 'right',
      width: '100%',
    }, 
    subHeadStyle: { 
        padding: '40px'
    }, 
   aboutStyle: {
      display: 'flex',
      justifyContent: 'center',
      padding: '50px',
      height: '100vw',
      width: '100vw',
    },  

  };

function About () {

return(
    <div className="aboutDiv" style={styles.aboutStyle}> 
    <h1>Full Stack Developer</h1>
    <div className="header-body">
        <img src="https://i.imgur.com/8q7Kug0.jpg" alt="a side profile of the developer at the Museum of Modern Art in New York City" style={styles.imgStyle} className="my-pic"></img>
        <h1 style={styles.headingStyle}  >Isaac Stofko
        </h1>
        </div>
         <h2 style={styles.subHeadStyle}> About Me</h2>
    <p>
    I am a new web developer equipped with a robust educational and professional foundation in English Literature, Creative Writing, Hospitality, and Team Management. Alongside these skills, I possess comprehensive knowledge of JavaScript, React, Node.js, MongoDB, REST APIs, CSS, HTML, and SQL among other languages and technologies. I eagerly anticipate integrating my imaginative and analytical mindset into the technology industry, as I embark on an interdisciplinary approach to problem-solving.
          </p>
    </div>
)
}

export default About 