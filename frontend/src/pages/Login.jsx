import React from "react";
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
          <div>
<<<<<<< HEAD
            <div>
                <input className="Inputs" type="checkbox" name="remember-me" id="" />
                <p>Remember me</p>
=======
            <div className="remember-me">
              <input type="checkbox" name="remember-me" id="" />
              <label>Remember me</label>
>>>>>>> 92dc0ffc62ee9688833ef8cd1eaeca681750413a
            </div>
            <a href="">Forgot Password</a>
          </div>
          <button className="login">Login</button>
          <div>
            <p>Don't have an account </p>
            <a href="">Sign up</a>
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
