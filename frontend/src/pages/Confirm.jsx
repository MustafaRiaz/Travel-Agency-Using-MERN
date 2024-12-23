import React from "react";
import "./confirm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "../Components/Navigation";
import TripDetails from "../Components/tripDetails";
import Center from "../Components/Center";
import Footer2 from "../Components/footer2";

function Confirm() {
  return (
    <div className="confirm-screen">
      <Navigation />

      {/* Main Layout */}
      <div className="content">
        {/* Flight Details*/}
        <div className="flight-data">
          {/* Trip Summary Header */}
          <div className="trip-summary-header">
            <h2 className="trip-summary-title">Trip Summary</h2>
            <img src="" alt="" />
          </div>
          <div className="trip-route">
            <p>Lahore</p>
            <img src="" alt="" />
            <p>Jeddah</p>
          </div>
          {/* Flight Information Card */}
          <div className="flight-card">
            {/* Top Section */}
            <div className="flight-section top-section">
              <div className="flight-details">
                <p className="time">20:20 AM</p>
                <p className="date">Mon, 12/23</p>
                <p className="flight-duration">5h 50m</p>
                <p className="time">08:15 AM</p>
                <p className="date">Mon, 12/23</p>
              </div>
            </div>

            {/* Middle Section (Images/Icons) */}
            <div className="flight-section middle-section">
              <span className="dot"></span>
              <span className="line"></span>
              <FontAwesomeIcon
                icon="fa-thin fa-plane-up"
                className="plane-up"
              />
              <span className="line"></span>
              <div className="flight-details flight-icons">
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
              <span className="line"></span>
              <span className="dot"></span>

              {/* <div className="flight-details flight-carrier">
                <img src="" alt="" />
                <p className="flight-company">Etihad International Airlines</p>
              </div> */}
            </div>

            {/* Bottom Section */}
            <div className="flight-section bottom-section">
              <div className="flight-details">
                <p className="airport">Lahore - LHE</p>
                <p className="airport-detail">Allama Iqbal International</p>
                <div className="compay-logo">
                  <img src="" alt="" />
                  <p className="company-name">Etihad International Airlines</p>
                </div>
                <p className="connection-info">Connection info</p>
                <div className="flight-connection">
                  <div className="carrier">
                    <p>Carrier</p>
                    <p className="carrier-bold">
                      Etihad International Airlines
                    </p>
                  </div>
                  <div className="connection-number">
                    <p>Connection number</p>
                    <p className="connection-number-bold">PK 750</p>
                  </div>
                </div>
                <div className="">
                  <p className="airport">Jeddah - JED</p>
                  <p className="airport-detail">King Abdulaziz International</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nights Information */}
          <p className="trip-nights">7 nights in Jeddah</p>
        </div>

        {/* Trip Details */}
        <TripDetails />
      </div>

      <Center />

      <Footer2 />
    </div>
  );
}

export default Confirm;
