import React from 'react';
import Card from './Card';


const object = {
    name: 'Isaac',
    discription: 'full stack developer'
}

export default function Display() {
    return (
      <div>   
        <Card name={object.name} description={object.description}/>
      </div>
    );
  }