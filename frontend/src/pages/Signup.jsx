import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Reusing the same CSS file

const SignUp = () => {
  return (
    <div className="login-page">
      <div className="login-details">
        <div className="manual-login">
          <h2>Sign up</h2>
          <p>Let’s get you all set up so you can access your personal account.</p>

          {/* Name Inputs */}
          <div className="name-inputs">
            <div>
              <p>First Name</p>
              <input className="Inputs" type="text" placeholder="John" />
            </div>
            <div>
              <p>Last Name</p>
              <input className="Inputs" type="text" placeholder="Duo" />
            </div>
          </div>

          {/* Email */}
          <p>Email</p>
          <input className="Inputs" type="email" placeholder="johnduo@gmail.com" />

          {/* Password */}
          <p>Password</p>
          <input className="Inputs" type="password" placeholder="********" />

          {/* Confirm Password */}
          <p>Confirm Password</p>
          <input className="Inputs" type="password" placeholder="********" />

          {/* Checkbox */}
          <div className="remember-me">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to the terms and conditions</label>
          </div>

          {/* Sign Up Button */}
          <button className="login">Sign Up</button>

          {/* Link to Login */}
          <div className="signup-link">
            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
          </div>
        </div>

        {/* Social Login */}
        <div className="authenticate">
          <p>Or sign up with</p>
          <div className="social-login">
            <button aria-label="Sign up with Facebook" className="social-button facebook">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button aria-label="Sign up with Google" className="social-button google">
              <i className="fab fa-google"></i>
            </button>
            <button aria-label="Sign up with Twitter" className="social-button twitter">
              <i className="fab fa-twitter"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
