import React from 'react';
import './FlightSlider.css';
import image1 from "../../assets/Slider Images/CardImages/FlightSlider/Egypt.svg";
import image2 from "../../assets/Slider Images/CardImages/FlightSlider/Saudi.svg";
import image3 from "../../assets/Slider Images/CardImages/FlightSlider/Uk.svg";
import image4 from "../../assets/Slider Images/CardImages/FlightSlider/Dubai.svg";
import image5 from "../../assets/Slider Images/CardImages/FlightSlider/China.svg";
import image6 from "../../assets/Slider Images/CardImages/FlightSlider/Singapore.svg";
import image7 from "../../assets/Slider Images/CardImages/FlightSlider/Canada.svg";
import flightWindowIcon from '../../assets/Slider Images/CardImages/FlightWindow.png';

const FlightSlider = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <div className="slider">
      {images.map((src, index) => (
        <div
          key={index}
          className={`image-container ${
            index === 0 || index === images.length - 1 ? "edge" :
            index === 3 ? "central" : "regular"
          }`}
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className={`image ${index === 3 ? "background" : ""}`}
          />
          {index === 3 && (
            <div className="overlay-container">
              <img
                src={flightWindowIcon}
                alt="Overlay"
                className="overlay"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FlightSlider;
