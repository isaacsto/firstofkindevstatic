import React from 'react';
/* import '../../src/App.css'; */

import '../../App.css'


const styles = {
    imgStyle: {
        width: '30%',
        height: 'auto',
        margin: '20px',

    },
    headingStyle: {
      fontSize: '100px',
      display: 'flex',
      justifyContent: 'flex-end',
      float: 'right'
    },
    subHeadStyle: {
        
        height: 'auto',
    },
    aboutStyle: {
      display: 'flex',
      justifyContent: 'center',
      padding: '50px',
    },

  };

function About () {

return(
    <div className="aboutDiv" style={styles.aboutStyle}> 
    <h1>About me</h1>
    <div className="header-body">
        <img src="https://i.imgur.com/8q7Kug0.jpg" alt="a side profile of me at the Museum of Modern Art in New York City" style={styles.imgStyle}></img>
        <h1  style={styles.headingStyle} >Isaac Stofko
       {/*  <img src="https://i.imgur.com/r9fdyL3.jpg" alt="Rene Magritte's painting of two figures standing in the sky imposed over a window" style={styles.imgStyle}/> */}
        </h1>
        </div>
         <h2 style={styles.subHeadStyle}>Full Stack Developer</h2>
    <p>
          I'm a freshly graduated full-stack web developer with an educational and professional background in English Literature, Creative Writing, Music Production, Hospitality, and Team Management. I look forward to bringing my creative and analytical mindset to the tech industry and pursuing an interdisciplinary appraoch to solving problems.
          </p>
    </div>
)
}

export default About 