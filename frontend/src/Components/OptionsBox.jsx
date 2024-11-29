import React from 'react';
import './OptionsBox.css'; // We'll define the styles here

const OptionsBox = () => {
  return (
    <div className="options-box">
      <div className="options-section">
        <h4>Plan Options</h4>
        <div className="option">
          <input type="checkbox" id="option1" />
          <label htmlFor="option1">Include Advanced Features</label>
          <span className="price">$5.99/mo</span>
        </div>
      </div>
      <div className="options-section">
        <h4>Price Range</h4>
        <input type="range" min="0" max="100" className="range-selector" />
        <div className="range-values">
          <span>$0</span>
          <span>$100</span>
        </div>
      </div>
    </div>
  );
};

export default OptionsBox;
