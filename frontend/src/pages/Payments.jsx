// Payment.jsx
import React from "react";
import "./payment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faUsers,
  faCreditCard,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import background_image from "../../assets/payment_images/image.svg";
import stripeLogo from "../../assets/payment_images/stripe_icon.svg";
import easypaisaLogo from "../../assets/payment_images/easy_paisa.svg";
import jazzcashLogo from "../../assets/payment_images/jazz_cash-logo.svg";
import bankTransferLogo from "../../assets/payment_images/debit_card.svg";
import visaLogo from "../../assets/payment_images/visa.svg";
import ublLogo from "../../assets/payment_images/ubl.svg";



const Payment = () => {
  return (
    <div className="payment-screen">
      {/* Top Navigation */}
      <div className="navigation">
        <img src={background_image} alt="" />
        <div className="nav-item">
          <FontAwesomeIcon icon={faPlane} className="icon" />
          <span>Flights</span>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faUsers} className="icon" />
          <span>Passengers</span>
        </div>
        <div className="nav-item active">
          <FontAwesomeIcon icon={faCreditCard} className="icon" />
          <span>Payments</span>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faCheckCircle} className="icon" />
          <span>Confirm</span>
        </div>
      </div>

      {/* Main Layout */}
      <div className="content">
        {/* Payment Methods */}
        <div className="payment-methods">
          <h2>Choose your payment method</h2>
          <p className="instructions">
            Make sure the names you enter exactly match your passport, and
            please use English characters only.
          </p>

          <form className="payment-form">
            {/* Payment Options */}
            <label className="payment-option">
              <div>
                <input type="radio" name="payment" />
                <span className="payment-label">Stripe Payment</span>
              </div>
              <img
                src={stripeLogo}
                alt="Stripe Logo"
                className="payment-logo"
              />
            </label>

            <label className="payment-option">
              <div>
                <input type="radio" name="payment" />
                <span className="payment-label">EasyPaisa</span>
              </div>
              <img
                src={easypaisaLogo}
                alt="EasyPaisa Logo"
                className="payment-logo"
              />
            </label>

            <label className="payment-option">
              <div>
                <input type="radio" name="payment" />
                <span className="payment-label">JazzCash</span>
              </div>
              <img
                src={jazzcashLogo}
                alt="JazzCash Logo"
                className="payment-logo"
              />
            </label>

            <label className="payment-option">
              <div>
                <input type="radio" name="payment" />
                <span className="payment-label">Bank Transfer</span>
              </div>
              <img
                src={ublLogo}
                alt="Bank Transfer Logo"
                className="payment-logo"
              />
              <img
                src={alfalahLogo}
                alt="Bank Transfer Logo"
                className="payment-logo"
              />
            </label>

            {/* Debit Card Details */}
            <div className="last-option">
              <label className="payment-option">
                <div className="payment-header">
                  <input type="radio" name="payment" />
                  <span className="payment-label">Debit Card</span>
                </div>
                <img
                  src={visaLogo}
                  alt="Visa Logo"
                  className="payment-logo"
                />
              </label>

              <div className="card-details">
                <div className="input-wrapper">
                  <label>Name on card*</label>
                  <input type="text" placeholder="John Duo" />
                </div>
                <div className="input-wrapper">
                  <label>Number on card</label>
                  <input type="text" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="input-wrapper">
                  <label>Expiry Date</label>
                  <input type="text" placeholder="MM / YY" />
                </div>
                <div className="input-wrapper">
                  <label>CVC</label>
                  <div className="cvc-container">
                    <input type="text" placeholder="XXX" />
                    <a href="" className="what">
                      What is this?
                    </a>
                  </div>
                </div>
              </div>
              <label className="save-card">
                <input type="checkbox" />
                Save card for future use
              </label>
            </div>

            <button type="submit" className="continue-button">
              Continue
            </button>
          </form>
        </div>

        {/* Trip Details */}
        <div className="trip-details">
          <h3>Trip Details</h3>
          <div className="btns">
            <button className="active">Round Trip</button>
            <button className="in-active">Economy</button>
          </div>
          <div className="details-row">
            <span className="bolds">Lahore to Jeddah</span>
            <div className="date-time">
              <span>Mon, 23 Dec 2024</span>
              <span>18h 40m</span>
            </div>
          </div>
          <hr />
          <div className="details-row">
            <span className="bolds">Jeddah to Lahore</span>
            <div className="date-time">
              <span>Mon, 30 Dec 2024</span>
              <span>18h 40m</span>
            </div>
          </div>
          <hr />
          <div className="details-row">
            <span className="bolds">1x Passenger</span>
            <span className="bolds">Rs. 476,058</span>
          </div>
          <div className="details-row">
            <span className="bolds">1x Cabin baggage</span>
            <span>Included</span>
          </div>
          <div className="details-row">
            <span className="bolds">1x Checked baggage</span>
            <span>Included</span>
          </div>
          <hr />
          <div className="details-row total">
            <span className="bolds">Grand Total</span>
            <span className="bolds">Rs. 476,058</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="center">
        <p>Seamless Payment Gateway Integration</p>
        <div className="center-logos">
          <img src="bank.png" alt="Bank" />
          <img src="visa.png" alt="Visa" />
          <img src="mastercard.png" alt="Mastercard" />
        </div>
      </div>

      <div className="footer">
        <div className="footer-content">
          <p>Company</p>
          <p>About</p>
          <p>MoonMyTrip</p>
          <p>Press</p>
          <p>Careers</p>
          <p>Contact</p>
          <p>Us</p>
        </div>
        <div className="footer-content">
          <p>Learn More</p>
          <p>Learn More</p>
          <p>Book on MoonMyTrip</p>
          <p>Affiliates</p>
          <p>Advertise</p>
          <p>Hoteliers</p>
          <p>Data Privacy Policy</p>
          <p>Terms</p>
        </div>
        <div className="footer-content">
          <p>Explore</p>
          <p>Airport Directory</p>
          <p>Airlines Directory</p>
          <p>Flight Schedules</p>
          <p>Hotel Chains</p>
        </div>
        <div className="footer-content">
          <p>Download</p>
          <p>Download</p>
          <p>Wego App (iOS)</p>
          <p>Weg`o App (Android)</p>
        </div>
        <div className="footer-content">
          <p>Contact Us</p>
          <p>Call: 03 111 543 111</p>
          <p>Email: info@noonmytrip.com</p>
        </div>
      </div>
      <hr className="end-line" />
      <div className="footer-links">
        <p>© 2024 MoonMyTrip. All rights reserved</p>
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
  );
};

export default Payment;
