import React from 'react';
import '../../App.css'

const style = {
  containerStyle: {
    backgroundImage: 'url("https://i.imgur.com/rwNKj6h.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
  }
}


function Home() {
  return (
  
      <div className="home-body" style={style.containerStyle}>
    
      </div>
  );
}

export default Home;