import React from 'react';

import '../styles/Album.css';

const Song = ({title,name}) => {
    return (
        <div className='album'>
            <div className='info'>
                <span className='title'>{title}</span>
                <span className='title'>{name}</span>
            </div>
        </div>
    );
};

export default Song;
