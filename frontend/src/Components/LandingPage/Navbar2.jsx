// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>
          <span className="logo-part1">Noon</span>
          <span className="logo-part2">MyTrip</span>
        </h1>
        <p>Travels and Tourism Pvt. Ltd</p>
      </div>
      <ul className="navbar-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#flights">Flights</a></li>
        <li><a href="#hotels">Hotels</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#login"><i className="fa fa-user"></i> Login</a></li>
        <li><a href="#register" className="register-button">Register Now</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
