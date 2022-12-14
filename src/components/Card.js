import React from 'react';

import '../styles/Card.css';

const Card = ({ image, title}) => {
    return (
        <div className='card'>
                <img src={image} alt={title} />
            <div className='info'>
                <span className='title'>{title}</span>

            </div>
        </div>
    );
};

export default Card;
