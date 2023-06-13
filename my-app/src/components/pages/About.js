import React from 'react';
import '../../src/App.css';


const styles = {
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
    <p>
          I'm a freshly graduated full-stack web developer with an educational and professional background in English Literature, Creative Writing, Music Production, Hospitality, and Team Management. I look forward to bringing my creative and analytical mindset to the tech industry and pursuing an interdisciplinary appraoch to solving problems.
          </p>
    </div>
)
}

export default About 