import React, { useState } from "react";
import "./FlightSearch.css"; // Assuming you extract the CSS to a separate file
import aeroplane from "../../assets/Slider Images/FlightBooking/aeroplane.png"; 


const FlightSearch = () => {
  const [activeTab, setActiveTab] = useState("one-way");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      {/* Top Buttons */}
      <button className="top-button">Flights</button>
      <div className="top-button-2"></div>
      <button className="top-button-3">Hotels</button>
      {/* Second Row */}
      <div className="trip-buttons">
        <button
          className={activeTab === "one-way" ? "active" : ""}
          onClick={() => handleTabClick("one-way")}
        >
          One-way
        </button>
        <button
          className={activeTab === "round-trip" ? "active" : ""}
          onClick={() => handleTabClick("round-trip")}
        >
          Round-trip
        </button>
        <button
          className={activeTab === "multi-city" ? "active" : ""}
          onClick={() => handleTabClick("multi-city")}
        >
          Multi-city
        </button>
      </div>

      {/* Third Row */}
      <div className="form-section">
        {/* From */}
        <div className="form-group">
          <label htmlFor="from">
            <img  className="fas fa-map-marker-alt"></img>
          </label>
          <input type="text" id="from" placeholder="From" />
        </div>

        {/* To */}
        <div className="form-group">
          <label htmlFor="to">
            <i className="fas fa-map-marker"></i> {/* Replace with an appropriate icon */}
          </label>
          <input type="text" id="to" placeholder="To" />
        </div>

        {/* Departure */}
        <div className="form-group">
          <label htmlFor="departure">
            <i className="fas fa-plane-departure"></i> {/* Replace with an appropriate icon */}
          </label>
          <input type="date" id="departure" />
        </div>

        {/* Return */}
        <div className="form-group">
          <label htmlFor="return">
            <i className="fas fa-plane-arrival"></i> {/* Replace with an appropriate icon */}
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
