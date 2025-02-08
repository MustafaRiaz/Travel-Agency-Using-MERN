import React, { useState } from "react";
import "../LandingPage/FlightSearch.css"; // Assuming you extract the CSS to a separate file
import mapMarkerIcon from "../../assets/Slider Images/FlightBooking/From.png"; // Load map marker icon
import doubleArrows from "../../assets/Slider Images/FlightBooking/doubleArrows.png"; // Load map marker icon

const FlightSearch = () => {
  const [activeTab, setActiveTab] = useState("one-way");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flight-search-container2">
      {/* Second Row */}
      <div className="trip-buttons">
        <button className={activeTab === "one-way" ? "active" : ""} onClick={() => handleTabClick("one-way")}>
          One-way
        </button>
        <button className={activeTab === "round-trip" ? "active" : ""} onClick={() => handleTabClick("round-trip")}>
          Round-trip
        </button>
        <button className={activeTab === "multi-city" ? "active" : ""} onClick={() => handleTabClick("multi-city")}>
          Multi-city
        </button>
      </div>

      {/* Third Row */}
      {/* Third Row */}
      <div className="form-section">
        {/* From */}
        <div className="form-group">
          <label htmlFor="from">
            <img src={mapMarkerIcon} alt="From" className="icon" />
            <span>From</span> {/* Text added after icon */}
          </label>
          <input type="text" id="from" placeholder="Lahore, Pakistan" />
        </div>

        {/* To */}
        <div className="form-group">
          <label htmlFor="to">
            <img src={mapMarkerIcon} alt="To" className="icon" />
            <span>To</span> {/* Text added after icon */}
          </label>
          <input type="text" id="to" placeholder="United Arab Emirates" />
        </div>

        {/* Departure */}
        <div className="form-group">
          <label htmlFor="departure">
            <img src={mapMarkerIcon} alt="Departure" className="icon" />
            <span>Departure</span> {/* Text added after icon */}
          </label>
          <input type="date" id="departure" />
        </div>

        {/* Return */}
        <div className="form-group">
          <label htmlFor="return">
            <img src={mapMarkerIcon} alt="Return" className="icon" />
            <span>Return</span> {/* Text added after icon */}
          </label>
          <input type="date" id="return" />
        </div>
      </div>


      {/* Fourth Row */}
      <div className="footer-row">
        <div className="checkbox-group">
          <input type="checkbox" id="direct-flight" />
          <label htmlFor="direct-flight">Direct Flights Only</label>
        </div>

        <div className="dropdown-group">
          <select>
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>3 Adults</option>
          </select>
          <select>
            <option>Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>
        </div>

        <button className="search-btn">Search Flight</button>
      </div>
    </div>

  );
};

export default FlightSearch;