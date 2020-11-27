import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCoachesObj, bookAppointment, cancelAppointment } from './coachesSlice';

const Coaches = () => {
  const [datetime, setDatetime] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoachesObj());
  }, []);

  return (
    <div>
      <input type="datetime-local" onChange={e => setDatetime(e.target.value)} />
      <button onClick={() => dispatch(bookAppointment({ coach_id: 10, date: datetime }))} type="button">Book</button>
      <button onClick={() => dispatch(cancelAppointment({ coach_id: 7 }))} type="button">Cancel</button>
    </div>
  );
};

export default Coaches;
