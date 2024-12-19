// JSX Component
import React from 'react';
import './FavouriteHotel.css';
import image1 from '../../assets/Slider Images/FavouriteHotels/image1.svg';
import image2 from '../../assets/Slider Images/FavouriteHotels/image2.svg';
import image3 from '../../assets/Slider Images/FavouriteHotels/image3.svg';

const hotels = [
  {
    name: 'Hotel Kazerne',
    location: 'Eindhoven, Netherlands',
    rating: 8.4,
    review: 'Very good',
    image: image1, // Replace with actual image URL
  },
  {
    name: 'Ace Hotel Brooklyn',
    location: 'Brooklyn, NY',
    rating: 8.4,
    review: 'Very good',
    image: image2, // Replace with actual image URL
  },
  {
    name: 'Arlo Midtown',
    location: 'New York, NY',
    rating: 8.4,
    review: 'Very good',
    image: image3, // Replace with actual image URL
  },
];

const FavouriteHotel = () => {
  return (
    <div className="favorite-hotels">
      <h2>
        Favorite <span>hotels</span> around the globe
      </h2>
      <div className="hotels-container">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p>{hotel.location}</p>
              <div className="hotel-rating">
                <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span> {/* Placeholder for 5 stars */}
                <span>
                  {hotel.review} {hotel.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteHotel;