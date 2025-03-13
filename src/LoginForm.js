import React, { useState } from 'react';
import './styles.css';

function LoginForm({ type, shiftContainer }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="formBox">
      <h2>Log In</h2>
      <div className="blueContainer">As a {type}</div>
      <form onSubmit={handleSubmit}>
        <div className="inputGroup">
          <i className="fas fa-envelope"></i>
          <input type="email" placeholder="Email" required />
        </div>
        <div className="inputGroup">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" required />
        </div>
        <div className="rememberMe">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button className="btn" type="submit">LOG IN</button>
        <a href="#" className="forgotPassword">Forgot Password?</a>
        <div className="socialLogin">
          <p>Or log in with:</p>
          <button type="button" className="btnSocial">
            <i className="fab fa-google"></i> Google
          </button>
        </div>
        {isLoading && (
          <div className="loadingSpinner">
            <i className="fas fa-spinner"></i> Logging in...
          </div>
        )}
      </form>
      <div className="switchLink">
        Login as an {type === 'member' ? 'admin' : 'member'}? <a href="#" onClick={shiftContainer}>Click here</a>
      </div>
    </div>
  );
}

export default LoginForm;