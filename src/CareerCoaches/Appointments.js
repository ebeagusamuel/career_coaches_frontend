import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAppointments } from './coachesSlice';

const Appointments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAppointments());
  }, []);

  return (
    <div>
      Appointments will go here.
    </div>
  );
};

export default Appointments;
