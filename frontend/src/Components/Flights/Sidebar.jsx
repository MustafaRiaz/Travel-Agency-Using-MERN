// Sidebar.jsx
import React, { useState } from "react";
import Checkbox from "./FlightComponents/CheckBox"; // Import the Checkbox component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
  const [isCheckedDirect, setIsCheckedDirect] = useState(false);
  const [isCheckedOneStop, setIsCheckedOneStop] = useState(true);
  const [isCheckedTwoStop, setIsCheckedTwoStop] = useState(true);
  const [isCheckedNoonMyTrip, setIsCheckedNoonMyTrip] = useState(true);
  const [carryOnCount, setCarryOnCount] = useState(0);
  const [checkedBagCount, setCheckedBagCount] = useState(0);

  // Time range sliders
  const [takeOffLHE, setTakeOffLHE] = useState(0);
  const [takeOffJED, setTakeOffJED] = useState(0);

  // Airlines Selection
  const [selectedAirlines, setSelectedAirlines] = useState({
    Airblue: false,
    FlyJinnah: true,
    Flynes: true,
    PIA: true,
    Saudia: true,
    "Multiple Airlines": true,
  });

  // Airports Selection
  const [selectedAirports, setSelectedAirports] = useState({
    LHE: true,
    "Jeddah King Abdulaziz": true,
  });

  const handleAirlineChange = (airline) => {
    setSelectedAirlines({
      ...selectedAirlines,
      [airline]: !selectedAirlines[airline],
    });
  };

  const handleAirportChange = (airport) => {
    setSelectedAirports({
      ...selectedAirports,
      [airport]: !selectedAirports[airport],
    });
  };

  const handleSelectAll = () => {
    const allSelected = Object.keys(selectedAirlines).reduce((acc, airline) => {
      acc[airline] = true;
      return acc;
    }, {});
    setSelectedAirlines(allSelected);
  };

  const handleClearAll = () => {
    const allDeselected = Object.keys(selectedAirlines).reduce((acc, airline) => {
      acc[airline] = false;
      return acc;
    }, {});
    setSelectedAirlines(allDeselected);
  };

  const handleAirportSelectAll = () => {
    const allSelected = Object.keys(selectedAirports).reduce((acc, airport) => {
      acc[airport] = true;
      return acc;
    }, {});
    setSelectedAirports(allSelected);
  };

  const handleAirportClearAll = () => {
    const allDeselected = Object.keys(selectedAirports).reduce((acc, airport) => {
      acc[airport] = false;
      return acc;
    }, {});
    setSelectedAirports(allDeselected);
  };

  const handleBagCountChange = (type, increment) => {
    if (type === "carryOn") {
      setCarryOnCount(carryOnCount + increment);
    } else if (type === "checkedBag") {
      setCheckedBagCount(checkedBagCount + increment);
    }
  };

  return (
    <div className="sidebar">
      {/* Box 1 - Stops */}
      <div className="price-alert-button">
          <FontAwesomeIcon icon={faBell} className="alert-icon" />
          <span className="button-text">Get Price Alerts</span>
        </div>
      <div className="box">
        <select className="airline-select">
          <option value="Stops">Stops</option>
          <option value="FlyJinnah">Fly Jinnah</option>
          <option value="Flynes">Flynes</option>
          <option value="PIA">PIA</option>
          <option value="Saudia">Saudia</option>
          <option value="Multiple Airlines">Multiple Airlines</option>
        </select>
        <div className="row">
          <Checkbox
            id="check1"
            label="Direct"
            checked={isCheckedDirect}
            onChange={() => setIsCheckedDirect(!isCheckedDirect)}
          />
        </div>
        <div className="row">
          <Checkbox
            id="check2"
            label="1 Stop from Rs. 469,719.00"
            checked={isCheckedOneStop}
            onChange={() => setIsCheckedOneStop(!isCheckedOneStop)}
          />
        </div>
        <div className="row">
          <Checkbox
            id="check3"
            label="2 Stop from Rs. 408,225.00"
            checked={isCheckedTwoStop}
            onChange={() => setIsCheckedTwoStop(!isCheckedTwoStop)}
          />
        </div>
      <hr className="bottom-line" />
      </div>

      {/* Box 2 - Book on NoonMyTrip */}
      <div className="box">
        <select className="airline-select">
          <option value="Book ib NoonTrip">Book on NoonMyTrip</option>
          <option value="FlyJinnah">Fly Jinnah</option>
          <option value="Flynes">Flynes</option>
          <option value="PIA">PIA</option>
          <option value="Saudia">Saudia</option>
          <option value="Multiple Airlines">Multiple Airlines</option>
        </select>
        <div className="row">
          <Checkbox
            id="check4"
            label="Show offers instantly bookable on NoonMyTrip"
            checked={isCheckedNoonMyTrip}
            onChange={() => setIsCheckedNoonMyTrip(!isCheckedNoonMyTrip)}
          />
        </div>
        <hr className="bottom-line" />
      </div>

      {/* Box 3 - Fee Assistance */}
      <div className="box">
        <select className="airline-select">
          <option value="Free Assisstance">Free Assisstance</option>
          <option value="FlyJinnah">Fly Jinnah</option>
          <option value="Flynes">Flynes</option>
          <option value="PIA">PIA</option>
          <option value="Saudia">Saudia</option>
          <option value="Multiple Airlines">Multiple Airlines</option>
        </select>
        <div className="row third-row">
          <div>
          <div>
              <FontAwesomeIcon icon={faCheckCircle} />
              <label>Checked Bag</label>
            </div>
            <div className="bag-controls">
              <button onClick={() => handleBagCountChange("carryOn", -1)}>-</button>
              <span>{carryOnCount}</span>
              <button onClick={() => handleBagCountChange("carryOn", 1)}>+</button>
            </div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} />
              <label>Checked Bag</label>
            </div>
            <div className="bag-controls">
              <button onClick={() => handleBagCountChange("carryOn", -1)}>-</button>
              <span>{carryOnCount}</span>
              <button onClick={() => handleBagCountChange("carryOn", 1)}>+</button>
            </div>
          </div>
        </div>
        <div className="row">

        </div>
        <hr className="bottom-line" />
      </div>

      {/* Box 4 - Time Range */}
      <div className="box">

        <select className="airline-select">
          <option value="Time">Time</option>
          <option value="FlyJinnah">Fly Jinnah</option>
          <option value="Flynes">Flynes</option>
          <option value="PIA">PIA</option>
          <option value="Saudia">Saudia</option>
          <option value="Multiple Airlines">Multiple Airlines</option>
        </select>
        <div className="row">
          <label>Time</label>
          <div className="time-slider">
            <label>Take-off from LHE</label>
            <input
              type="range"
              min="0"
              max="24"
              step="0.1"
              value={takeOffLHE}
              onChange={(e) => setTakeOffLHE(e.target.value)}
            />
            <span>{`Mon ${Math.floor(takeOffLHE)}:30 AM - Mon ${Math.floor(takeOffLHE) + 11}:00 PM`}</span>
          </div>
          <div className="time-slider">
            <label>Take-off from JED</label>
            <input
              type="range"
              min="0"
              max="24"
              step="0.1"
              value={takeOffJED}
              onChange={(e) => setTakeOffJED(e.target.value)}
            />
            <span>{`Mon ${Math.floor(takeOffJED)}:00 AM - Tue ${Math.floor(takeOffJED) + 12}:00 PM`}</span>
          </div>
        </div>
        <hr className="bottom-line" />
      </div>

      {/* Box 5 - Airlines Selection */}
      <div className="box">
      <select className="airline-select">
          <option value="Airlines">Airlines</option>
          <option value="FlyJinnah">Fly Jinnah</option>
          <option value="Flynes">Flynes</option>
          <option value="PIA">PIA</option>
          <option value="Saudia">Saudia</option>
          <option value="Multiple Airlines">Multiple Airlines</option>
        </select>
        <div className="row">
          <label>Airlines</label>
          <select className="airline-select">
            <option value="Airblue">Airblue</option>
            <option value="FlyJinnah">Fly Jinnah</option>
            <option value="Flynes">Flynes</option>
            <option value="PIA">PIA</option>
            <option value="Saudia">Saudia</option>
            <option value="Multiple Airlines">Multiple Airlines</option>
          </select>
        </div>
        <div className="row">
          <button onClick={handleSelectAll}>Select All</button>
          <button onClick={handleClearAll}>Clear All</button>
        </div>
        {Object.keys(selectedAirlines).map((airline) => (
          <div key={airline} className="row">
            <Checkbox
              id={`airline-${airline}`}
              label={airline}
              checked={selectedAirlines[airline]}
              onChange={() => handleAirlineChange(airline)}
            />
          </div>
        ))}
        <hr className="bottom-line" />
      </div>

      {/* Box 6 - Airports Selection */}
      <div className="box">
      <select className="airline-select">
          <option value="Airports">Airports</option>
          <option value="FlyJinnah">Fly Jinnah</option>
          <option value="Flynes">Flynes</option>
          <option value="PIA">PIA</option>
          <option value="Saudia">Saudia</option>
          <option value="Multiple Airlines">Multiple Airlines</option>
        </select>
        <div className="row">
          <label>Airports</label>
          <select className="airport-select">
            <option value="LHE">LHE: Lahore</option>
            <option value="Jeddah King Abdulaziz">Jeddah King Abdulaziz</option>
          </select>
        </div>
        <div className="row">
          <button onClick={handleAirportSelectAll}>Select All</button>
          <button onClick={handleAirportClearAll}>Clear All</button>
        </div>
        {Object.keys(selectedAirports).map((airport) => (
          <div key={airport} className="row">
            <Checkbox
              id={`airport-${airport}`}
              label={airport}
              checked={selectedAirports[airport]}
              onChange={() => handleAirportChange(airport)}
            />
          </div>
        ))}
        <hr className="bottom-line" />
      </div>
    </div>
  );
};

export default Sidebar;
