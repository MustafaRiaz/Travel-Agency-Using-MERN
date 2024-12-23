// Payment.jsx
import React from "react";
import "./payment.css";

import Navigation from "../Components/Navigation";
import TripDetails from "../Components/tripDetails";
import Center from "../Components/Center";
import Footer2 from "../Components/footer2";
// import stripeLogo from "../../assets/payment_images/stripe_icon.svg";
// import easypaisaLogo from "../../assets/payment_images/easy_paisa.svg";
// import jazzcashLogo from "../../assets/payment_images/jazz_cash-logo.svg";
// import bankTransferLogo from "../../assets/payment_images/debit_card.svg";
// import visaLogo from "../../assets/payment_images/visa.svg";
// import ublLogo from "../../assets/payment_images/ubl.svg";

const Payment = () => {
  return (
    <div className="payment-screen">
      {/* Top Navigation */}
      <Navigation />

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
                // src={stripeLogo}
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
                // src={easypaisaLogo}
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
                // src={jazzcashLogo}
                alt="JazzCash Logo"
                className="payment-logo"
              />
            </label>

            <label className="payment-option">
              <div>
                <input type="radio" name="payment" />
                <span className="payment-label">Bank Transfer</span>
              </div>
              <div className="bank-transfer-logos">
                <img
                  // src={ublLogo}
                  alt="Bank Transfer Logo"
                  className="payment-logo"
                />
                <img
                  // src={alfalahLogo}
                  alt="Bank Transfer Logo"
                  className="payment-logo"
                />
              </div>
            </label>

            {/* Debit Card Details */}
            <div className="last-option">
              <label className="payment-option">
                <div className="payment-header">
                  <input type="radio" name="payment" />
                  <span className="payment-label">Debit Card</span>
                </div>
                <img
                  // src={visaLogo}
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
        <TripDetails />
      </div>

      {/* Footer */}
      <Center />

      <Footer2 />
    </div>
  );
};

export default Payment;
