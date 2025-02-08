import React, { useState } from "react";
import "./Subscription.css";

function SubscribeComponent() {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Checkbox:", isChecked);
  };

  return (
    <div className="subscribe-container">
      <div className="content-box">
        <h1 className="title">Never miss an offer</h1>
        <p className="subtitle">
          Subscribe and be the first to receive our exclusive offers.
        </p>

        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="subscribe-button">
            Subscribe
          </button>
        </form>

        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <p className="ConsentParagraph">I would like to get offers and news from Qatar Airways. I have read
          and understood the privacy notice.
          </p>
        </label>
      </div>
    </div>
  );
}

export default SubscribeComponent;
