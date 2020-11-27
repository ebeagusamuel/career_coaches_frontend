import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCoachesObj, bookAppointment } from './coachesSlice';

const Coaches = () => {
  const { token } = JSON.parse(window.localStorage.getItem('userObj'));
  const [datetime, setDatetime] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoachesObj(token));
  }, []);

  const handleClick = e => {
    e.preventDefault();
    dispatch(bookAppointment(token, datetime));
  };

  return (
    <form onSubmit={handleClick}>
      <input type="datetime-local" onChange={e => setDatetime(e.target.value)} />
      <button type="submit">Book</button>
    </form>
  );
};

export default Coaches;
