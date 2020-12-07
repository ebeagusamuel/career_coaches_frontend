import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CommonLoading } from 'react-loadingg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Nav from './feature/CareerCoaches/Nav';
import LoginPage from './feature/auth/LoginPage';
import SignupPage from './feature/auth/SignupPage';
import Coaches from './feature/CareerCoaches/Coaches';
import Appointments from './feature/CareerCoaches/Appointments';
import HomePage from './feature/CareerCoaches/HomePage';
import { fetchCoachesObj } from './feature/CareerCoaches/coachesSlice';

function App() {
  const status = useSelector(state => state.auth.status);
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedIn) {
      dispatch(fetchCoachesObj());
    }
  }, [loggedIn]);

  if (status === 'loading') {
    return <CommonLoading />;
  }

  if (loggedIn) {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <Nav />
            <div className="col-10 offset-2 overflow-hidden p-0">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/coaches" component={Coaches} />
                <Route exact path="/appointments" component={Appointments} />
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
      </Switch>
    </Router>
  );
}

export default App;
