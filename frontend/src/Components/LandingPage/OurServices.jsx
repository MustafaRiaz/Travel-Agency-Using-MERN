import React from 'react';
import './OurServices.css';
import airplaneImage from '../../assets/Slider Images/CardImages/GirlImage.png';

const OurServices = () => {
  return (
    <div className="our-services-container">
      <h2 className="services-heading">Our Key Services</h2>
      <div className="services-content">
        <div className="service-cards">
          <div className="service-card">
            <h4>Flight Bookings:</h4>
            <p>
            Our primary service is flight bookings to various destinations within Pakistan and abroad. With our quick and easy search options, you can compare flights for prices and timing. This allows you to choose the best and most economical option for yourself.
            </p>
          </div>
          <div className="service-card">
            <h4>Flight + Hotel Packages:</h4>
            <p>
            We also offer flight and hotel bookings as packages if you want to enjoy a hassle-free vacation with your friends or family. We have listed all kinds of hotels that are adapted to the needs of our clients, so you can choose from them and make a good combination with your flights. Everything is easy-to-book, and you get your booking details almost immediately on your email.
            </p>
          </div>
          <div className="service-card">
            <h4>Multiple Destinations:</h4>
            <p>
            You can book a one-way flight, return flight, or a flight with multiple destinations with us. Our flight search is well-adapted and gives you the best combinations as per the timing and prices. You can use the filter option to customize and narrow down the search results to ensure that you get tailored suggestions for your upcoming travels.
            </p>
          </div>
        </div>
        <div className="service-image">
          <img src={airplaneImage} alt="Woman reading on a plane" />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
