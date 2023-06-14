import React from 'react';
/* import '../../src/App.css'; */

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
    }

  };


function Header() {
    return (
    
    <header className="header">
        <div className="header-body">
        <img src="https://i.imgur.com/8q7Kug0.jpg" alt="a side profile of me at the Museum of Modern Art in New York City" style={styles.imgStyle}></img>
        <h1  style={styles.headingStyle} >Isaac Stofko
       {/*  <img src="https://i.imgur.com/r9fdyL3.jpg" alt="Rene Magritte's painting of two figures standing in the sky imposed over a window" style={styles.imgStyle}/> */}
        </h1>
         
        </div>
         <h2 style={styles.subHeadStyle}>Full Stack Developer</h2>
        
        </header>
    );
  }
  
  export default Header;