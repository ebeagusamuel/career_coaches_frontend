import React from 'react';
import { useSelector } from 'react-redux';
import { CommonLoading } from 'react-loadingg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import LoginPage from '../auth/LoginPage';
import SignupPage from '../auth/SignupPage';
import Coaches from './Coaches';
import Appointments from './Appointments';
import HomePage from './HomePage';

function App() {
  const status = useSelector(state => state.auth.status);
  const loggedIn = useSelector(state => state.auth.loggedIn);

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
        {/* <Redirect to="/" /> */}
      </Switch>
    </Router>
  );
}

export default App;
