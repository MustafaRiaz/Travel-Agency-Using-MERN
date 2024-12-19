import React, { useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";

function LoginComponent() {
  const [formData, setFormData] = useState({
    email: "johnduo@gmail.com",
    password: "********",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
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
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <p className="login-subtitle">Login to access your Golobe account</p>

      <form onSubmit={handleSubmit} className="login-form">
        {/* Email Input */}
        <div className="input-container">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="options-container">
          <label className="remember-me">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            Remember me
          </label>
          <a href="#" className="forgot-password">
            Forgot Password
          </a>
        </div>

        {/* Login Button */}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      {/* Sign Up Prompt */}
      <p className="signup-prompt">
        Don’t have an account? <a href="#" className="signup-link">Sign up</a>
      </p>

      {/* Or Login With */}
      <div className="separator">
        <span>Or login with</span>
      </div>

      {/* Social Icons */}
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

export default LoginComponent;
