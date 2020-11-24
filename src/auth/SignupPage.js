import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from './authSlice';
import './Auth.css';

const SignupPage = () => {
  const
  const handleChange = () => {

  };

  return (
    <div className="container">
      <h2 className="text-center py-5">Sign Up</h2>
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
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default SignupPage;
