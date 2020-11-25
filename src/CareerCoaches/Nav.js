import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../auth/authSlice';

const Nav = () => {
  const dispatch = useDispatch();

  return (
    <div className="col-2 p-0 Nav fixed-top mr-0 px-0 h-100 text-center border-right">
      <div className="appname">
        <NavLink to="/">BACC</NavLink>
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
        <button type="button" className="border-0" onClick={() => dispatch(logout(false))}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Nav;
