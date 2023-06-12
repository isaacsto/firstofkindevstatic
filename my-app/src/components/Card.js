import React from 'react';


export default function Card() {
    const cardStyle = {
      width: '50rem',
    };

return (
    <div className="container">
        <div className="card" style={cardStyle}>
         {/*    <img className="card-img-top" src="../assets/prof_pic.jpeg" alt="picture of the dev"/> */}
            <div className="card-body">
                <h5 className="card-title">Isaac</h5>
                <p className="card-text">Developer</p>
              {/*   <a href="/" className="btn btn-primary">{}</a> */}
            </div>
        </div>
    </div>
);

}