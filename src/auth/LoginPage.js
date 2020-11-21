import React from 'react';
import styles from './Auth.module.css';

const LoginPage = () => (
  <div className={styles.container}>
    <h2 className="text-center py-5">Log In</h2>
    <form className="w-50 text-center mx-auto text-light text-bold">
      <div className="form-group">
        <label htmlFor="username">
          Username
          <input type="text" className="form-control" name="username" id="username" placeholder="Enter a Username" />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="password">
          Password
          <input type="password" className="form-control" id="Password" name="password" placeholder="Password" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Log In</button>
    </form>
  </div>
);
export default LoginPage;
