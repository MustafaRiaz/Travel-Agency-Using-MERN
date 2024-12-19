import React from 'react';
import './payment.css';

const Payment = () => {
  return (
    <div className="payment-screen">
      {/* Top Navigation */}
      <div className="navigation">
        <span className="nav-item active">Flights</span>
        <span className="nav-item">Passengers</span>
        <span className="nav-item">Payments</span>
        <span className="nav-item">Confirm</span>
      </div>

      {/* Main Layout */}
      <div className="content">
        {/* Payment Methods */}
        <div className="payment-methods">
          <h2>Choose your payment method</h2>
          <p>
            Make sure the names you enter exactly match your passport, and please use English characters only.
            Names can’t be changed once you have completed your booking.
          </p>

          <form className="payment-form">
            <label className="payment-option">
              <input type="radio" name="payment" />
              Stripe Payment
            </label>

            <label className="payment-option">
              <input type="radio" name="payment" />
              EasyPaisa
            </label>

            <label className="payment-option">
              <input type="radio" name="payment" />
              JazzCash
            </label>

            <label className="payment-option">
              <input type="radio" name="payment" />
              Bank Transfer
            </label>

            {/* Debit Card Option */}
            <label className="payment-option">
              <input type="radio" name="payment" />
              Debit Card
            </label>

            <div className="card-details">
              <input type="text" placeholder="Name on card" />
              <input type="text" placeholder="Card Number" />
              <div className="card-row">
                <input type="text" placeholder="MM / YY" />
                <input type="text" placeholder="CVC" />
              </div>
              <label className="save-card">
                <input type="checkbox" />
                Save card for future use
              </label>
            </div>

            <button type="submit" className="continue-button">Continue</button>
          </form>
        </div>

        {/* Trip Details */}
        <div className="trip-details">
          <h3>Trip Details</h3>
          <div className="details-row">
            <span>Lahore to Jeddah</span>
            <span>Mon, 23 Dec 2024</span>
          </div>
          <div className="details-row">
            <span>Jeddah to Lahore</span>
            <span>Mon, 30 Dec 2024</span>
          </div>
          <div className="details-row">
            <span>1x Passenger</span>
            <span>Rs. 476,058</span>
          </div>
          <div className="details-row">
            <span>1x Cabin baggage</span>
            <span>Included</span>
          </div>
          <div className="details-row">
            <span>1x Checked baggage</span>
            <span>Included</span>
          </div>
          <hr />
          <div className="details-row total">
            <span>Grand Total</span>
            <span>Rs. 476,058</span>
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
