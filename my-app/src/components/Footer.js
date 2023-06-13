import React from 'react';
import '../../src/App.css';


const styles = {
    footerStyle: {
      display: 'flex',
      justifyContent: 'center'
    },
  };

  function Footer() {
    return(
  <footer style={styles.footerStyle}>Created with React</footer>
    )}

export default Footer