import React from 'react';
import'./login.css';


function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="title">Welcome to Structura</h1>
        <form className="form">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
