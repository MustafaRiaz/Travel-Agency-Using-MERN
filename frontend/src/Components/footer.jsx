import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About MoonMyTrip</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Learn More</h4>
          <ul>
            <li>Book on MoonMyTrip</li>
            <li>Affiliates</li>
            <li>Advertise</li>
            <li>Hoteliers</li>
            <li>Data Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Explore</h4>
          <ul>
            <li>Airport Directory</li>
            <li>Airlines Directory</li>
            <li>Flight Schedules</li>
            <li>Hotel Chains</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Download</h4>
          <ul>
            <li>Wego App (iOS)</li>
            <li>Wego App (Android)</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Call: 03 111 543 111</p>
          <p>Email: info@moonmytrip.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-text">
          <p>© 2024 MoonMyTrip Travels Pvt Ltd</p>
        </div>
        <div className="footer-social-icons">
          <a href="#" className="social-icon"></a>
          <a href="#" className="social-icon"></a>
          <a href="#" className="social-icon"></a>
          <a href="#" className="social-icon"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
