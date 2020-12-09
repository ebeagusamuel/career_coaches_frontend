import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from './authSlice';
import './Auth.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const loginError = useSelector(state => state.auth.error);
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(user));
    setUser({
      username: '',
      password: '',
    });
  };

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="authcontainer">
      <h2 className="text-center py-5">Log In</h2>
      {loginError && <div className="auth-error"><em>{loginError}</em></div>}
      <form onSubmit={handleSubmit} className="w-50 text-center mx-auto text-light text-bold">
        <div className="form-group">
          <label htmlFor="username">
            Username
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              placeholder="Enter a Username"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password
            <input
              type="password"
              className="form-control"
              id="Password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit" className="btn btn-primary mr-2">
            Log In
          </button>
          <Link to="/signup" className="btn btn-primary">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
