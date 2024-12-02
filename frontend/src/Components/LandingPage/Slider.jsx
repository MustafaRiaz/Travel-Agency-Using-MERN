import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faPlaneArrival, faCalendarAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import './Slider.css';
import image1 from "../../assets/Slider Images/CardImages/Background1.jpg";

const Slide = () => {
  return (
    <div className="slide-container">
      <div className="slide" style={{ backgroundImage: `url(${image1})` }}>
        <div className="slide-content">
          <h1>Welcome to Noon Trips</h1>
          <p>Discover amazing content</p>
        </div>
        <div className="form-box">
          <div className="form-box-heading">Check Flights Now</div>
          <form>
            <div className="radio-buttons">
              <label>
                <input type="radio" name="option" value="1" /> Round Trip
              </label>
              <label>
                <input type="radio" name="option" value="2" /> One Way
              </label>
              <label>
                <input type="radio" name="option" value="3" /> Multicity
              </label>
            </div>
            <div className="form-row">
              <div className="input-icon">
                <FontAwesomeIcon icon={faPlaneDeparture} />
                <select className="form-control">
                  <option value="" disabled selected>From</option>
                  <option value="1">Lahore</option>
                  <option value="2">Islamabad</option>
                  <option value="3">Multan</option>
                </select>
              </div>
              <div className="input-icon">
                <FontAwesomeIcon icon={faPlaneArrival} />
                <select className="form-control">
                  <option value="" disabled selected>Destination</option>
                  <option value="1">Dubai</option>
                  <option value="2">UAE</option>
                  <option value="3">Kuwait</option>
                </select>
              </div>
              <div className="input-icon">
                <FontAwesomeIcon icon={faCalendarAlt} />
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="form-row">
              <div className="input-icon">
                <FontAwesomeIcon icon={faCalendarAlt} />
                <input type="date" className="form-control" />
              </div>
              <div className="input-icon">
                <FontAwesomeIcon icon={faUserFriends} />
                <input type="text" className="form-control" placeholder="Number of Travelers" />
              </div>
              <button type="button" className="form-control">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Slide;
