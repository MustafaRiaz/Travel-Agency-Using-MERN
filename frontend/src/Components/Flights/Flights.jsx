import React, { useState } from "react";
import "./Flights.css";
import FlightSearch from "./FlightSearch.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../LandingPage/Navbar.jsx";
import FlightBody from "./FlightBody.jsx";
import {
  faPlane,
  faUsers,
  faCreditCard,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import background_image from "../../../src/assets/payment_images/image.svg";
import Footer from "../footer.jsx";

const Flights = () => {
  const [activeTab, setActiveTab] = useState("Payments");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    <div className="flight-screen">
        <div className="navCotainer">
            <Navbar />
        </div>
      {/* Top Navigation */}
      <div className="navigation">
        <img src={background_image} alt="" />
        {/* Closing the navigation div before FlightSearch */}
      </div>
      <div className="flight-searchContainer">
        <FlightSearch />
      </div>
    </div>
    <div className="flightBody">
        <FlightBody />
    </div>

    </>
  );
};

export default Flights;
