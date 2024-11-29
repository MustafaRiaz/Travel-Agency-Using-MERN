import React from 'react';
import './PricingBox.css'; // We'll define the styles here

const PricingBox = ({ icon, heading1, heading2, heading3, price, buttonText }) => {
  return (
    <div className="pricing-box">
      <div className="pricing-icon">{icon}</div>
      <div className="pricing-headings">
        <h4>{heading1}</h4>
        <h4>{heading2}</h4>
        <h4>{heading3}</h4>
      </div>
      <div className="pricing-details">
        <div className="price">{price}</div>
        <button className="pricing-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default PricingBox;
