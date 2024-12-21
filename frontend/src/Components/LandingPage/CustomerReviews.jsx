import React from 'react';
import './CustomerReviews.css'; // Add a CSS file for styling if needed

const reviews = [
  {
    name: 'Mashood Ahmed',
    text: `I booked my flight tickets from NoonMyTrip to go to Islamabad, and it was super easy. I got the best prices and received my e-ticket immediately by email. I totally recommend their services for quick and cheap online air tickets in Pakistan.`,
    rating: 5,
    image: ('Reviews/user1.png'), // Replace with actual image path
  },
  {
    name: 'Noor Mustafa',
    text: `NoonMyTrip is by far my favorite ticket booking website because it allows you to make single as well as multiple destination bookings in the most hassle-free manner. Moreover, it allows for multiple payment options, so you can choose the one that suits you best.`,
    rating: 5,
    image: 'Reviews/user2.png', // Replace with actual image path
  },
  {
    name: 'Muhammad Ali',
    text: `I have always preferred the human touch and visited travel agents to chat with them and get my tickets booked. So, as you might imagine, I was quite nervous about booking flight tickets online because I am not very tech savvy. However, NoonMyTrip has the most user-friendly website, and it made navigating through it extremely simple. Highly recommended!`,
    rating: 5,
    image: 'Reviews/user3.png', // Replace with actual image path
  },
];

const CustomerReviews = () => {
  return (
    <div className="customer-reviews">
      <h2>Customer Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-text">
              <p>{review.text}</p>
            </div>
            <div className="review-footer">
              <img src={review.image} alt={`${review.name}`} className="review-image" />
              <div className="review-info">
                <h3>{review.name}</h3>
                <div className="stars">
                  {Array(review.rating)
                    .fill()
                    .map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
