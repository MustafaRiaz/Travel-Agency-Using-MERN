import React, { useState } from "react";
import "./Signup.css"; // Link to external CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";

function SignupComponent() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Duo",
    email: "johnduo@gmail.com",
    password: "********",
    confirmPassword: "********",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign up</h2>
      <p className="signup-subtitle">
        Let’s get you all set up so you can access your personal account.
      </p>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-row">
          <div className="input-container">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-container">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <label className="checkbox-container">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
          />
          I agree to all the <a href="#">&nbsp;Terms</a>&nbsp;and&nbsp;<a href="#"> Privacy Policies</a>
        </label>
        <button type="submit" className="submit-button">
          Create Account
        </button>
      </form>
      <p className="signup-login">
        Don’t have an account? <a href="#" className="link">Sign up</a>
      </p>
      <div className="separator">
        <span>Or Sign up with</span>
      </div>
      <div className="social-icons">
        <div className="icon-border">
          <FontAwesomeIcon icon={faFacebook} color="#4267B2" />
        </div>
        <div className="icon-border">
          <FontAwesomeIcon icon={faGoogle} color="#DB4437" />
        </div>
        <div className="icon-border">
          <FontAwesomeIcon icon={faApple} color="#000" />
        </div>
      </div>
    </div>
  );
}
export default SignupComponent;


