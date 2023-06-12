import React from 'react';

export default function Card() {
    const cardStyle = {
      width: '18rem',
    };

 // Helper function that generates a random width for our placeholder images
 const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split('.')[0];
  };


return (
    <div className="container">
        <div className="card" style={cardStyle}>
            <img className="card-img-top" src={`/assets/filler.jpeg/${randomWidth()}`} alt="cap"/>
            <div className="card-body">
                <h5 className="card-title">{}</h5>
                <p className="card-text">{}</p>
                <a href="/" className="btn btn-primary">{}</a>
            </div>
        </div>
    </div>
);

}