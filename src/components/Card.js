import React from 'react';
import '../styles/Card.css';

const Card = ({ name, date, time, number }) => {

    return (
        <div className='card'>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time}pm</p>
            <p>Number of guests: {number}</p>
            <button>CANCEL</button>
        </div>
    )
}

export default Card;