import React from 'react';
import Card from './Card';

const card1 = {
    repo: 'https://github.com/molyneauxk93/PawsPlus-/',
    description: 'Third Party API Pet-Finder APP',
    deployed: 'https://molyneauxk93.github.io/PawsPlus-/',
    title: 'PawsPlus+'
}

const card2 = {
    repo: 'https://github.com/Cashew1337/Travel-Planner/',
    description: 'Full Stack Travel Planner App',
    deployed: 'TBD',
    title: 'DayTryppers', 
}

const card3 = {
    repo: 'https://github.com/isaacsto/Portfolio',
    description: 'Pure HTML Webpage',
    deployed: 'https://isaacsto.github.io/Portfolio/',
    title: 'First Portfolio'
}

const card4 = {
    repo: 'ttps://github.com/isaacsto/Code-Quiz',
    description: 'JavaScript Timed Quiz App',
    deployed: 'https://isaacsto.github.io/Code-Quiz/',
    title: 'Code Quiz'
}

const card5 = {
    repo: 'https://github.com/isaacsto/Work-Day-Scheduler',
    description: 'Simple Calendar App',
    deployed: 'https://isaacsto.github.io/Work-Day-Scheduler/',
    title: 'Work Day Scheduler'
}

const card6 = {
    repo: 'https://github.com/isaacsto/Tech-Blog',
    description: 'Full Stack Tech Blog App',
    deployed: 'TBD',
    title: 'Tech-Talk'
}

export default function Display() {
    return (
        <div>
            <Card repo={card1.name} description={card1.description} deployed ={card1.deployed} title={card1.title}/>
            <Card repo={card2.name} description={card2.description} deployed ={card2.deployed} title={card2.title}/>
            <Card repo={card3.name} description={card3.description} deployed ={card3.deployed} title={card3.title}/>
            <Card repo={card4.name} description={card4.description} deployed ={card4.deployed} title={card4.title}/>
            <Card repo={card5.name} description={card5.description} deployed ={card5.deployed} title={card5.title}/>
            <Card repo={card6.name} description={card6.description} deployed ={card6.deployed} title={card6.title}/>
        </div>
    )
}