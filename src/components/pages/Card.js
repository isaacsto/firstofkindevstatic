import React from 'react';

export default function Card(props) {
    const cardStyle = {
        height: '33vh',
        backgroundSize: 'cover',
        backgroundPositionY: '60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    }


return (
    <div className="card">
    <div className="card-body" style={cardStyle}>
         <h5 className="card-title">
         <a href={`${props.repo}` }class="card-anchor"> {props.description}</a>
         </h5>
         <p><a href={`${props.deployed}`} class="card-anchor">{props.title}</a></p>
    </div>       
</div>
)
};