import React from 'react';
import '../../App.css'


const styles = {
    imgStyle: {
        width: '40%',
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
      height: '50vw',
      width: '100vw',
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
    I am a new web developer equipped with a robust educational and professional foundation in English Literature, Creative Writing, Hospitality, and Team Management. Alongside these skills, I possess comprehensive knowledge of JavaScript, React, Node.js, MongoDB, REST APIs, CSS, HTML, and SQL among other languages and technologies. I eagerly anticipate integrating my imaginative and analytical mindset into the technology industry, as I embark on an interdisciplinary approach to problem-solving.
          </p>
    </div>
)
}

export default About 