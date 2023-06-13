import React from 'react';
import '../../src/App.css';

const styles = {
    navbarStyle: {
      background: '#7F95A2',
      justifyContent: 'flex-end',
    },
  };

  function Navbar() {
    return (
        <div>   
        <nav style={styles.navbarStyle} className="navbar">
        <a href="/">Welcome</a>
        </nav> 
        <section>
       
          </section>
        </div>
      );
  }
  
  export default Navbar;