// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import logo from "../../assets/Slider Images/CardImages/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>
          <img src={logo} alt="" />
        </h1>
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
