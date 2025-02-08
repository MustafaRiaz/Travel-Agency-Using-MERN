import React, { useState, useEffect } from 'react';
import './FlightSlider.css';
import image1 from "../../assets/Slider Images/CardImages/FlightSlider/China.svg";
import image2 from "../../assets/Slider Images/CardImages/FlightSlider/Saudi.svg";
import image3 from "../../assets/Slider Images/CardImages/FlightSlider/Uk.svg";
import image4 from "../../assets/Slider Images/CardImages/FlightSlider/Dubai.svg";
import image5 from "../../assets/Slider Images/CardImages/FlightSlider/China.svg";
import image6 from "../../assets/Slider Images/CardImages/FlightSlider/Singapore.svg";
import image7 from "../../assets/Slider Images/CardImages/FlightSlider/Dubai.svg";
import flightWindowIcon from '../../assets/Slider Images/CardImages/FlightWindow.png';

const FlightSlider = () => {
  const [images, setImages] = useState([
    image1, image2, image3, image4, image5, image6, image7,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move the first image to the end of the array
      setImages((prevImages) => [...prevImages.slice(1), prevImages[0]]);
    }, 3000); // Change images every 1 second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="images-container">
        {images.map((src, index) => (
          <div
            key={index}
            className={`image-container ${
              index === 3 ? "central" : "regular"
            }`}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className={`image ${index === 3 ? "overlayed-image" : ""}`}
            />
          </div>
        ))}
      </div>
      <div className="overlay-container">
        <img
          src={flightWindowIcon}
          alt="Overlay"
          className="overlay"
        />
      </div>
    </div>
  );
};

export default FlightSlider;
