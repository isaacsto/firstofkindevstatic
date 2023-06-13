import React from 'react';
import '../../src/App.css';

const styles = {
    headingStyle: {
      fontSize: '100px',
      display: 'flex',
      justifyContent: 'flex-end'
    },
  };

function Header() {
    return (
      <header className="header">
        <h1 style={styles.headingStyle}>Isaac Stofko</h1>
         <img src="./assets/prof_pic.jpeg" alt="a side profile of me at the Museum of Modern Art in New York City"></img> 
        <h2>Full Stack Developer</h2>
      </header>
    );
  }
  
  export default Header;