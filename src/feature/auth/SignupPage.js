import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser } from './authSlice';
import './Auth.css';

const SignupPage = () => {
  const dispatch = useDispatch();
  const signupError = useSelector(state => state.auth.error);
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createUser(user));
    setUser({
      email: '',
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
      <h2 className="text-center py-5">Sign Up</h2>
      {signupError && <div className="auth-error"><em>{signupError}</em></div>}
      <form onSubmit={handleSubmit} className="w-50 text-center mx-auto text-light text-bold">
        <div className="form-group">
          <label htmlFor="email">
            Email address
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={user.email}
            />
          </label>
        </div>
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
              value={user.username}
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
              value={user.password}
            />
          </label>
        </div>
        <div>
          <button type="submit" className="btn btn-primary mr-2">
            Sign Up
          </button>
          <Link to="/login" className="btn btn-primary">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
};
export default SignupPage;
