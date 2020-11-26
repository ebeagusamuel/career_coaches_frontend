import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAppointments } from './coachesSlice';

const Appointments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const userObj = JSON.parse(window.localStorage.getItem('userObj'));
    if (userObj) {
      const { token } = userObj;
      dispatch(fetchAppointments(token));
    }
  }, []);

  return (
    <div>
      Appointments will go here.
    </div>
  );
};

export default Appointments;
