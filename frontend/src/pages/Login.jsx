import React from "react";
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-details">
        <div className="manual-login">
          <h2>Login</h2>
          <p>Login to access your global account</p>

          <p>Email</p>
          <input className="Inputs" type="text" />

          <p>Password</p>
          <input className="Inputs" type="password" />

          <div className="remember-me">
            <input type="checkbox" name="remember-me" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          <button className="login">Login</button>

          <div className="signup-link">
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>

        <div className="authenticate">
          <p>Or login with</p>
          <div className="social-login">
            <button aria-label="Login with Facebook" className="social-button facebook">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button aria-label="Login with Google" className="social-button google">
              <i className="fab fa-google"></i>
            </button>
            <button aria-label="Login with Twitter" className="social-button twitter">
              <i className="fab fa-twitter"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
