import React from 'react';
import './ContactStrip.css';

const ContactStrip = () => {
  return (
    <div className="contact-strip">
      <div className="contact-strip-container">
        <div className="contact-info">
          <div>
            <a href="tel:+923402336666">Phone: +92 340 233 66 66</a>
          </div>
          <div>
            <a href="mailto:info@noonmytrip.com">Email: info@noonmytrip.com</a>
          </div>
        </div>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactStrip;
