import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';
import './App.css';
import { logout } from '../auth/authSlice';
import LoginPage from '../auth/LoginPage';
import SignupPage from '../auth/SignupPage';
import Coaches from './Coaches';
import HomePage from './HomePage';

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.auth.loggedIn);

  if (loggedIn) {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 p-0 Nav fixed-top mr-0 px-0 h-100 text-center border-right">
              <div className="appname">
                <NavLink to="/">
                  BACC
                </NavLink>
              </div>
              <div className="NavLinks pt-3">
                <NavLink to="/">Home</NavLink>
              </div>
              <div className="NavLinks pt-3">
                <NavLink to="/coaches">Coaches</NavLink>
              </div>
              <div className="NavLinks pt-3">
                <NavLink to="/appointments">Appointments</NavLink>
              </div>
              <div className="NavLinks pt-3">
                <button type="button" className="border-0" onClick={() => dispatch(logout(false))}>Logout</button>
              </div>
            </div>
            <div className="col-10 offset-2 overflow-hidden bg-dark p-0">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/coaches" component={Coaches} />
                <Redirect to="/" />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/signup" component={SignupPage} />
        <Route path={['/', '/login']} component={LoginPage} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </Router>
  );
}

export default App;
