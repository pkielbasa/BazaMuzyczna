import React from 'react';

import '../styles/Album.css';

const Album = ({ image, title}) => {
    return (
        <div className='album'>
            <img src={image} alt={title} />
            <div className='info'>
                <span className='title'>{title}</span>

            </div>
        </div>
    );
};

export default Album;
