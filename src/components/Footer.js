import React from 'react';

import '../App.css';



const styles = {
    footerStyle: {
      display: 'flex',
      justifyContent: 'center',
      zIndex: '999'
    },
    linkStyle: {
      padding: '0px 5px',
    }
  };

  function Footer() {
    return(
      <div>
              <a class="back-up" href="#header">Back to top</a>
  <footer className="footer" style={styles.footerStyle}>
    <div>
  <a href="https://github.com/isaacsto" target="blank"><i class="fab fa-github" style={styles.linkStyle}></i></a>
  <a href="https://www.linkedin.com/in/isaac-stofko-374a32264/" target="blank" style={styles.linkStyle}><i class="fab fa-linkedin"></i></a>
  <a href="https://assignedfakeatbirth.wordpress.com/" target="blank"><i class="fab fa-wordpress" style={styles.linkStyle}></i></a>
  </div>
  </footer>
  </div>
    )}

export default Footer