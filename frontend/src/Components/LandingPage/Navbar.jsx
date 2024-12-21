import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../../assets/Slider Images/CardImages/logo.svg";

const Navbar = () => {
  // State to manage the mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>
          <img src={logo} alt="Logo" />
        </h1>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button className="navbar-toggle" onClick={toggleMenu}>
        Menu
      </button>

      {/* Navbar Links, only show if menuOpen is true */}
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to='/'>
          <li><a href="#home" className="active">Home</a></li>
        </Link>
        <li><a href="#about">About</a></li>
        <Link to="/payments">
          <li><a href="#flights">Payments</a></li>
        </Link>
        <Link to='/flights'>
           <li><a href="#flights">Flights</a></li>
        </Link>
        <li><a href="#blog">Blog</a></li>
        {/* Use Link for navigation to Login page */}
        <li>
          <Link to="/login">
            <i className="fa fa-user"></i> Login
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <a href="#register" className="register-button">Register Now</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
