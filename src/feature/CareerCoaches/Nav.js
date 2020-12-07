import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../auth/authSlice';
import logo from '../../assets/BACClogo.png';

const Nav = () => {
  const dispatch = useDispatch();

  return (
    <div className="col-2 p-0 Nav fixed-top mr-0 px-0 h-100 text-center border-right">
      <div className="appname">
        <NavLink className="text-decoration-none rounded" to="/">
          <img className="bacc-logo pr-2" src={logo} alt="BACC Logo" />
        </NavLink>
      </div>
      <div className="NavLinks mt-3">
        <NavLink className="text-decoration-none p-2 rounded" to="/">Home</NavLink>
      </div>
      <div className="NavLinks mt-3">
        <NavLink className="text-decoration-none p-2 rounded" to="/coaches">Coaches</NavLink>
      </div>
      <div className="NavLinks mt-3">
        <NavLink className="text-decoration-none p-1 p-md-2 rounded" to="/appointments">Appointments</NavLink>
      </div>
      <div className="NavLinks mt-3">
        <NavLink onClick={() => dispatch(logout(false))} className="text-decoration-none p-2 rounded" to="/logout">Logout</NavLink>
      </div>

      <div className="Nav-footer mb-5">
        <div className="d-flex justify-content-center">
          <a href="https://github.com/ebeagusamuel" target="blank" className="text-decoration-none px-1"><i className="fab fa-github" aria-label="github" /></a>
          <a href="https://linkedin.com/in/ebeagusamuel" target="blank" className="text-decoration-none px-1"><i className="fab fa-linkedin" aria-label="github" /></a>
          <a href="https://twitter.com/ebeagu_samuel" target="blank" className="text-decoration-none px-1"><i className="fab fa-twitter" aria-label="github" /></a>
        </div>
        <span className="inline-block px-1"><small>2020 Ebeagu Samuel</small></span>
      </div>
    </div>
  );
};

export default Nav;
