// Payment.jsx
import React from 'react';
import './payment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faUsers, faCreditCard, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import background_image from "../assets/payment images/image.svg"

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
            Make sure the names you enter exactly match your passport, and please use English characters only.
          </p>

          <form className="payment-form">
            {/* Payment Options */}
            <label className="payment-option">
              <div>
              <input type="radio" name="payment" />
              <span className="payment-label">Stripe Payment</span>
              </div>
              <img src="../assets/payment images/stripe-logo.png" alt="Stripe Logo" className="payment-logo" />
            </label>

            <label className="payment-option">
              <div>
              <input type="radio" name="payment" />
              <span className="payment-label">EasyPaisa</span>
              </div>
              <img src="path/to/easypaisa-logo.png" alt="EasyPaisa Logo" className="payment-logo" />
            </label>

            <label className="payment-option">
              <div>
              <input type="radio" name="payment" />
              <span className="payment-label">JazzCash</span>
              </div>
              <img src="path/to/jazzcash-logo.png" alt="JazzCash Logo" className="payment-logo" />
            </label>

            <label className="payment-option">
              <div>
              <input type="radio" name="payment" />
              <span className="payment-label">Bank Transfer</span>
              </div>
              <img src="path/to/banktransfer-logo.png" alt="Bank Transfer Logo" className="payment-logo" />
            </label>

            {/* Debit Card Details */}
            <div className='last-option'>
              <label className="payment-option">
                <div>
                <input type="radio" name="payment" />
                <span className="payment-label">Debit Card</span>
                </div>
                <img src="path/to/visa-logo.png" alt="Visa Logo" className="payment-logo" />
              </label>

              <div className="card-details">
                <input type="text" placeholder="Name on card" />
                <input type="text" placeholder="0000 0000 0000 0000" />
                <input type="text" placeholder="MM / YY" />
                <div className="card-row">
                  <input type="text" placeholder="CVC" />
                  <a href="" className='what'>What is this?</a>
                </div>
                <label className="save-card">
                  <input type="checkbox" />
                  Save card for future use
                </label>
              </div>
            </div>

            <button type="submit" className="continue-button">Continue</button>
          </form>

        </div>

        {/* Trip Details */}
        <div className="trip-details">
          <h3>Trip Details</h3>
          <div className='btns'>
            <button className='active'>Round Trip</button>
            <button className='in-active'>Economy</button>
          </div>
          <div className="details-row">
            <span className='bolds'>Lahore to Jeddah</span>
            <div className='date-time'>
              <span>Mon, 23 Dec 2024</span>
              <span>18h 40m</span>
            </div>
          </div>
          <hr />
          <div className="details-row">
            <span className='bolds'>Jeddah to Lahore</span>
            <div className='date-time'>
              <span>Mon, 30 Dec 2024</span>
              <span>18h 40m</span>
            </div>
          </div>
          <hr />
          <div className="details-row">
            <span className='bolds'>1x Passenger</span>
            <span className='bolds'>Rs. 476,058</span>
          </div>
          <div className="details-row">
            <span className='bolds'>1x Cabin baggage</span>
            <span >Included</span>
          </div>
          <div className="details-row">
            <span className='bolds'>1x Checked baggage</span>
            <span >Included</span>
          </div>
          <hr />
          <div className="details-row total">
            <span className='bolds'>Grand Total</span>
            <span className='bolds'>Rs. 476,058</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>Seamless Payment Gateway Integration</p>
        <div className="footer-logos">
          <img src="bank.png" alt="Bank" />
          <img src="visa.png" alt="Visa" />
          <img src="mastercard.png" alt="Mastercard" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
