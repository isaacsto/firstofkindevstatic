import React from 'react';
import '../../src/App.css';

const styles = {
    headingStyle: {
      fontSize: '100px',
      display: 'flex',
      justifyContent: 'flex-start'
    },
    imgStyle: {
        width: '30%',
        height: 'auto',
        padding: '10px',
        /* display: 'flex', */
        float: 'right'
    }
  };


function Header() {
    return (
      <header className="header">
        <div className="header-body">
        <h1 style={styles.headingStyle}>Isaac Stofko
         <img src="https://i.imgur.com/0KsY1OR.jpg" alt="a side profile of me at the Museum of Modern Art in New York City" style={styles.imgStyle}></img> 
         </h1>
         </div>
        <h2>Full Stack Developer</h2>
      </header>
    );
  }
  
  export default Header;