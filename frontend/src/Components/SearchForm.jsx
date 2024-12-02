import React from 'react';
import './styles.css';

const SearchForm = () => {
  return (
    <div className="search-form">
      <div className="tabs">
        <button className="active-tab">Flights</button>
        <button>Hotels</button>
        <button>Packages</button>
      </div>
      <div className="form">
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
        <input type="date" placeholder="Departure" />
        <input type="date" placeholder="Return" />
        <select>
          <option>1 Adult</option>
          <option>2 Adults</option>
        </select>
        <select>
          <option>Economy</option>
          <option>Business</option>
        </select>
        <button className="search-btn">Search Flight</button>
      </div>
    </div>
  );
};

export default SearchForm;
