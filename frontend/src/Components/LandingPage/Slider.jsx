import React from 'react';
import './Slider.css';
import image1 from "../../assets/Slider Images/CardImages/Layer1.svg";
import image2 from "../../assets/Slider Images/CardImages/Layer2.svg"; 
import FlightSearch from './FlightSearch';


const Slide = () => {
  const images = [image1, image2];

  return (
    <>
      <div className="slide-container">
        <div className="slide">
          {images.map((image, index) => (
            <div
              key={index}
              className="layer background"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}

          <div className="slide-content" role="banner">
            <h1>Experience the ultimate<br />In Premium Travel</h1>
            <p>Fares starting from PKR 20,000</p>
          </div>
        </div>
        <div className="flight-search">
          <FlightSearch />
        </div>
      </div>
    </>
  );
};

export default Slide;
