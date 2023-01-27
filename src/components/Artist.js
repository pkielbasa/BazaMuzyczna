import React from 'react';

import '../styles/Artist.css';

const Artist = ({image, title}) => {
    return (
        <div className='artist'>
            <img src={image} alt={title}/>
            <div className='info'>
                <span className='title'>{title}</span>

            </div>
        </div>
    );
};

export default Artist;
