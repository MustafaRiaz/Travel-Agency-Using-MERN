import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-us">
          <h2>About Us</h2>
          <p>We are a leading travel agency dedicated to providing the best travel experiences around the world. Join us and explore new destinations with ease and comfort.</p>
        </div>
        <div className="footer-section quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact-us">
          <h2>Contact Us</h2>
          <p>Email: info@travelagency.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Travel St, Adventure City</p>
        </div>
        <div className="footer-section social-media">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Travel Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
