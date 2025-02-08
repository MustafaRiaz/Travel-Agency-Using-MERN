import React from "react";
import "./Footer.css"; // Importing the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-list">
            <li>About MoonMyTrip</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Learn More</h3>
          <ul className="footer-list">
            <li>Book on MoonMyTrip</li>
            <li>Affiliates</li>
            <li>Advertise</li>
            <li>Hoteliers</li>
            <li>Data Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Explore</h3>
          <ul className="footer-list">
            <li>Airport Directory</li>
            <li>Airlines Directory</li>
            <li>Flight Schedules</li>
            <li>Hotel Chains</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Download</h3>
          <ul className="footer-list">
            <li>Wego App (iOS)</li>
            <li>Wego App (Android)</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-list">
            <li>Call: 03 111 543 111</li>
            <li>Email: info@moonmytrip.com</li>
          </ul>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© 2024 MoonMyTrip Travels Pvt Ltd</p>
        <div className="footer-social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
