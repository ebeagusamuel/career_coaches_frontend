import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCoachesObj } from './coachesSlice';

const Coaches = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const userObj = JSON.parse(window.localStorage.getItem('userObj'));
    if (userObj) {
      const { token } = userObj;
      dispatch(fetchCoachesObj(token));
    }
  }, []);

  return <div>List of coaches</div>;
};

export default Coaches;
