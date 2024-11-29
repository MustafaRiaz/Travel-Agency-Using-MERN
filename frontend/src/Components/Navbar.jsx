// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../assets/Slider Images/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="" className="logo-image" />
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
