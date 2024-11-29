import React, { forwardRef } from 'react';
import './Card.css';

const Card = forwardRef(({ picture, text1, text2 }, ref) => {
    return (
        <div className="card" ref={ref}>
            <div className="card-image">
                <img src={picture} alt={text1} />
            </div>
            <div className="card-content">
                <h2 className="card-title">{text1}</h2>
                <p className="card-description">{text2}</p>
            </div>
        </div>
    );
});

export default Card;
