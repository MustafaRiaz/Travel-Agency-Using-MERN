import React from 'react';
import './Card2.css';
import Etihad from '../../../assets/FlightImages/etihad.png';
import aeroplane from '../../../assets/FlightImages/aeroplane.png';

const FlightCard = () => {
    return (
        <div className="flight-card-container-main">
            <div className="flight-card-container">
                <div className="flight-card">
                    {/* Flight Row 1 */}
                    <div className="flight-info">
                        <div className="flight-detail">
                            <div className="airline-logo">
                                <img src={Etihad} alt="Etihad Airline" />
                            </div>
                            <div className="flight-time">
                                <p className="departure-time">20:20</p>
                            </div>
                            <div className="line"></div>
                            <div className="red-dot"></div>
                            <div className="line"></div>
                            <div className="small-icon">
                                <img src={aeroplane} alt="Small Icon" />
                            </div>
                            <div className="arrival-time">
                                <p>08:15</p>
                            </div>
                            <div className="flight-stop">
                                <span>1 Stop</span>
                                <span>AUH</span>
                            </div>
                        </div>
                    </div>

                    {/* Flight Row 2 */}
                    <div className="flight-info">
                        <div className="flight-detail">
                            <div className="airline-logo">
                                <img src={Etihad} alt="Etihad Airline" />
                            </div>
                            <div className="flight-time">
                                <p className="departure-time">14:30</p>
                            </div>
                            <div className="line"></div>
                            <div className="red-dot"></div>
                            <div className="line"></div>
                            <div className="small-icon">
                                <img src={aeroplane} alt="Small Icon" />
                            </div>
                            <div className="arrival-time">
                                <p>08:55</p>
                            </div>
                            <div className="flight-stop">
                                <span>1 Stop</span>
                                <span>AUH</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content for the right side */}
                <div className="flight-card-right">
                    <div className="price-container">
                        <span className="best-value">Best Value</span>
                        <p className="price">Rs 476,058</p>
                        <span className="per-person">Per Person</span>
                    </div>
                    <button className="select-btn">Select</button>
                </div>
            </div>
        </div>
    );
};

export default FlightCard;