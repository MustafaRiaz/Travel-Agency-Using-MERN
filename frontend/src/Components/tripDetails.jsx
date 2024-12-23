import React from 'react';
import './tripDetails.css';

function TripDetails() {
  return (
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
            <div className="total-row">
              <span className="bolds">Grand Total</span>
              <span className="bolds">Rs. 476,058</span>
            </div>
            <span className="grand-total-exp">
            Includes all taxes, fees, surcharges, and Kiwi.com service fees.
            Kiwi.com service fees are calculated per passenger and are not
            refundable.
            </span>
          </div>
    </div>
  )
}

export default TripDetails
