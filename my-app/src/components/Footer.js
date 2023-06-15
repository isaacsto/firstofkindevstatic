import React from 'react';

import '../../src/App.css';



const styles = {
    footerStyle: {
      display: 'flex',
      justifyContent: 'center'
    },
  };

  function Footer({currentPage, handlePageChange}) {
    return(
  <footer className="footer" style={styles.footerStyle}>Created with React</footer>
    )}

export default Footer