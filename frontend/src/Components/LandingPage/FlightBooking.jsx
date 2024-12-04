import React from "react";
import "./FlightBooking.css";

const FlightBooking = () => {
  return (
    <div className="booking-container">
      <div className="tabs">
        <button className="tab active">Flights</button>
        {/* <button className="tab">Hotels</button> */}
      </div>
      <div className="form-container">
        <div className="trip-type">
          <button className="trip-option active">One-Way</button>
          <button className="trip-option">Round-Trip</button>
          <button className="trip-option">Multi-City</button>
        </div>
        <div className="input-fields">
          <div className="field">
            <label>From</label>
            <input type="text" value="Lahore, Pakistan" readOnly />
          </div>
          <div className="field">
            <label>To</label>
            <input type="text" value="United Arab Emirates" readOnly />
          </div>
          <div className="field">
            <label>Departure</label>
            <input type="text" value="23 July, 2024" readOnly />
          </div>
          <div className="field">
            <label>Return</label>
            <input type="text" value="2 Aug, 2024" readOnly />
          </div>
        </div>
        <div className="options">
          <div>
            <input type="checkbox" id="direct" />
            <label htmlFor="direct">Direct Flights Only</label>
          </div>
          <div className="dropdowns">
            <select>
              <option>1 Adult</option>
            </select>
            <select>
              <option>Economy</option>
            </select>
          </div>
        </div>
        <button className="search-btn">Search Flight</button>
      </div>
    </div>
  );
};

export default FlightBooking;
