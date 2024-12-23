import React from 'react'
import "./center_footer.css";

function Footer2() {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">
          <p className="first-footer">Company</p>
          <p>About</p>
          <p>MoonMyTrip</p>
          <p>Press</p>
          <p>Careers</p>
          <p>Contact</p>
          <p>Us</p>
        </div>
        <div className="footer-content">
          <p className="first-footer">Learn More</p>
          <p>Book on MoonMyTrip</p>
          <p>Affiliates</p>
          <p>Advertise</p>
          <p>Hoteliers</p>
          <p>Data Privacy Policy</p>
          <p>Terms</p>
        </div>
        <div className="footer-content">
          <p className="first-footer">Explore</p>
          <p>Airport Directory</p>
          <p>Airlines Directory</p>
          <p>Flight Schedules</p>
          <p>Hotel Chains</p>
        </div>
        <div className="footer-content">
          <p className="first-footer">Download</p>
          <p>Download</p>
          <p>Wego App (iOS)</p>
          <p>Weg`o App (Android)</p>
        </div>
        <div className="footer-content">
          <p className="first-footer">Contact Us</p>
          <p>Call: 03 111 543 111</p>
          <p>Email: info@noonmytrip.com</p>
        </div>
      </div>
      <hr className="end-line" />
      <div className="footer-links">
        <p>© 2024 NoonMytrip Travels Pvt Ltd</p>
        <div className="social-icons">
          <a href="https://www.facebook.com">
            <img src="facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com">
            <img src="twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com">
            <img src="instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com">
            <img src="linkedin.png" alt="Linkedin" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer2
