import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAppointments } from './coachesSlice';

const Appointments = () => {
  const { token } = JSON.parse(window.localStorage.getItem('userObj'));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAppointments(token));
  }, []);

  return (
    <div>
      Appointments will go here.
    </div>
  );
};

export default Appointments;
