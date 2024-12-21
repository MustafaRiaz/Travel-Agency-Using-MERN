import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import "./FlightBody.css";
import PriceAlert from "./PriceAlert.jsx";
import Card from "./FlightComponents/Card1.jsx"

const FlightBody = () => {
  return (
    <div className="flight-body-container">
        <div className="fbc-firstrow">
            <Sidebar></Sidebar>
        </div>
        <div className="fbc-secondrow">
            <PriceAlert></PriceAlert>
            <div className="card1-container">
              <Card></Card>
            </div>

        </div>
    </div>
  );
};

export default FlightBody;
