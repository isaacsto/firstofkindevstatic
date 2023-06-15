import React from 'react';

import '../App.css';



const styles = {
    footerStyle: {
      display: 'flex',
      justifyContent: 'center'
    },
    linkStyle: {
      padding: '5px'
    }
  };

  function Footer({currentPage, handlePageChange}) {
    return(
  <footer className="footer" style={styles.footerStyle}>
    <div >
  <a href="https://github.com/isaacsto" target="_blank"><i class="fab fa-github" style={styles.linkStyle}></i></a>
  <a href="https://www.linkedin.com/in/isaac-stofko-374a32264/" target="_blank" style={styles.linkStyle}><i class="fab fa-linkedin"></i></a>
  <a href="https://assignedfakeatbirth.wordpress.com/" target="_blank"><i class="fab fa-wordpress" style={styles.linkStyle}></i></a>
  </div>
  </footer>
    )}

export default Footer