import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import SignupPage from '../auth/SignupPage';
// import LoginPage from './auth/LoginPage';

function App() {
  const loggedIn = useSelector(state => state.auth.loggedIn);

  if (loggedIn) {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 p-0 Nav fixed-top mr-0 px-0 h-100 text-center">
            <div className="appname">BACC</div>
            <div className="NavLinks pt-3">Home</div>
            <div className="NavLinks pt-3">Coaches</div>
            <div className="NavLinks pt-3">Appointments</div>
            <div className="NavLinks pt-3">Logout</div>
          </div>
          <div className="col-10 offset-2 overflow-hidden bg-dark p-0">B</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SignupPage />
      {/* <LoginPage /> */}
    </div>
  );
}

export default App;
