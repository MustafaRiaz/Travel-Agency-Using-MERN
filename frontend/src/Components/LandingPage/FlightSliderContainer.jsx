import React from 'react';
import FlightSlider from './FlightSlider';
import './FlightSliderContainer.css';

const FlightSliderContainer = () => {
    return (
        <div className="flight-slider-container">
            <h1>
                Book Your <span className="highlight">Flight</span> Tickets Now!
            </h1>
            <FlightSlider />
            <div className="flight-info">
                <label>United Arab Emirates</label>
                <h2>Dubai</h2>
                <p className="subtitle">Book Economy Class Return until Nov 2024</p>
                <h3>From PKR 129,000.00</h3>
                <p className="description">
                With just a few clicks, you can easily book flight tickets to your favorite destination. Regardless of whether you are traveling for business or pleasure, you can get the most affordable flights Pakistan has to offer on our website. You can even browse our website to find the best travel destinations around the world with exclusive deals and discounts. If you prefer the human touch, feel free to call us, and one of our travel agents would be more than happy to guide you through the process.
                </p>
            </div>
        </div>
    );
};

export default FlightSliderContainer;
