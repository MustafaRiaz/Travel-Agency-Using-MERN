import React from "react";
import "./CardContainer.css";
import image1 from "../assets/Slider Images/CardImages/Frame 81.svg";
import discount from "../assets/Slider Images/CardImages/Discount.png";
import filter from "../assets/Slider Images/CardImages/Filter.png";
import frame from "../assets/Slider Images/CardImages/Frame.png";
import simplification from "../assets/Slider Images/CardImages/Simplification.png";

const NoonMyTrip = () => {
  return (
    <div className="noonmytrip-container">
      {/* Major Airlines Section */}
      <div className="airlines-section">
        <div className="airlines-subsection">
          <div className="text-content">
            <h3>Major airlines Worldwide</h3>
            <p>Get the flights from the most trusted airlines</p>
          </div>
          <div className="airlines-logos">
            <img src={image1} alt="Qatar Airways" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>
          What <span className="highlight">NoonMyTrip</span> brings to the table.
        </h2>
        <div className="features-list">
          <div className="feature-item">
            <img src={discount} />
            <h4>Big names, great deals</h4>
            <p>Search 100s of travel sites to compare prices.</p>
          </div>
          <div className="feature-item">
            <img src={filter} className="icon-filter" />
            <h4>Filter for what you want</h4>
            <p>Free Wi-Fi? Early arrival? Instantly customize your results.</p>
          </div>
          <div className="feature-item">
            <img src={simplification} className="icon-track" />
            <h4>Track prices</h4>
            <p>Not ready to book? Set alerts for when prices drop.</p>
          </div>
          <div className="feature-item">
            <img src={frame} className="icon-more" />
            <h4>More than flights</h4>
            <p>Find deals for your entire trip from hotels to rental cars.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoonMyTrip;
