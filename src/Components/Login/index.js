import React from 'react';
import './index.css';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const handleSignupRedirect = () => {
    history.push('/SignUp');
  };

  return (
    <div className='login-container'>
      <div className="container">
        <h1 className="header-style">Welcome to Your Profile Login</h1>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="text" id="email" placeholder="Enter your Username" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Enter Password</label>
          <input type="password" id="password" placeholder="Enter your Password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">Confirm Your Password</label>
          <input type="password" id="confirmPassword" placeholder="Enter your Password" />
        </div>
        <div className="button-group">
          <button>Login</button>
          <button onClick={handleSignupRedirect}>SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default Login;