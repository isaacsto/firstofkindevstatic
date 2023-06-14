import React from 'react';
import '../../App.css'

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

function Home() {
  return (
  
  <header className="header">
      <div className="header-body">
    
     
    <img src="https://i.imgur.com/r9fdyL3.jpg" alt="Rene Magritte's painting of two figures standing in the sky imposed over a window" style={styles.imgStyle}/> 
    
       
      </div>
    
      
      </header>
  );
}

export default Home;