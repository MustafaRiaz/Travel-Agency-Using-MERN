import React from 'react'
import background_image from "../assets/payment_images/image.svg";
import './Navigation.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faUsers,
  faCreditCard,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
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
  )
}

export default Navigation
