import React from "react";
import './Login.css'

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-details">
        <div className="manual-login">
          <h2>Login</h2>
          <p>Login to access your global account</p>
          <p>Email</p>
          <input type="text" />
          <p>Password</p>
          <input type="password" />
          <div>
            <div>
                <input type="checkbox" name="remember-me" id="" />
                <p>Remember me</p>
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
          <div>
            <button>fcebook</button>
            <button>google</button>
            <button>twitter</button>
          </div>
        </div>
      </div>
      <div className="picture">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Login;
