
import React from 'react';
import './Card1.css';

const CardComponent = () => {
  return (
    <div className="card-container">
      <div className="card best-value">
        <div className="card-header">
          <span className="tag">Best Value</span>
        </div>
        <div className="card-body">
          <p className="price">Rs 476,058</p>
          <p className="duration">20h 10 (Average)</p>
        </div>
      </div>

      <div className="card cheapest">
        <div className="card-header">
          <span className="tag">Cheapest</span>
        </div>
        <div className="card-body">
          <p className="price">Rs 408,258</p>
          <p className="duration">29h 08 (Average)</p>
        </div>
      </div>

      <div className="card fastest">
        <div className="card-header">
          <span className="tag">Fastest</span>
        </div>
        <div className="card-body">
          <p className="price">Rs 639,815</p>
          <p className="duration">17h 45 (Average)</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
