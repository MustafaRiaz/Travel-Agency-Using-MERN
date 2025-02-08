import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "./PriceAlert.css";

const PriceAlert = () => {
  const [selectedSort, setSelectedSort] = useState("Best");

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  return (
    <div className="price-alert-container">
      {/* Get Price Alerts Button and Results Text */}
      <div className="price-alert-button-container">
        <span className="results-text">167 results</span>
      </div>

      {/* Sorting Dropdown */}
      <div className="sort-dropdown">
        <label htmlFor="sort-by">Sort by</label>
        <select
          id="sort-by"
          value={selectedSort}
          onChange={handleSortChange}
          className="sort-select"
        >
          <option value="Best">Best</option>
          <option value="Price">Price</option>
          <option value="Rating">Rating</option>
        </select>
      </div>
      
      {/* Sidebar */}
    </div>
  );
};

export default PriceAlert;