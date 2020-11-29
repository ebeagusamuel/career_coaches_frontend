import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommonLoading } from 'react-loadingg';
import Coach from './Coach';
import { fetchCoachesObj } from './coachesSlice';

const Coaches = () => {
  const status = useSelector(state => state.careerCoaches.status);
  const coaches = useSelector(state => state.careerCoaches.coachesObj.coaches);
  const images = useSelector(state => state.careerCoaches.coachesObj.images);
  let coachesItem;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoachesObj());
  }, [dispatch]);

  if (status === 'loading') {
    return <CommonLoading />;
  }

  if (status === 'rejected') {
    return <h2 className="mt-5 px-5 text-center">There was an error fetching data from the API, please refresh the page again</h2>;
  }

  if (coaches) {
    coachesItem = coaches.map((coach, index) => {
      const coachImage = images[index];
      const key = coach.id;
      return <Coach key={key} coachDetails={coach} coachImage={coachImage} />;
    });
  }

  return (
    <>
      <h2 className="text-center text-bold">Book an Appointment</h2>
      <p className="text-center">
        Book an appointment with any of our very experinced and passionate
        carrer coaches today to give your career a boost
      </p>
      <div className="py-3 mx-auto d-flex flex-wrap justify-content-center">
        { coachesItem }
      </div>
    </>
  );
};

export default Coaches;
