import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommonLoading } from 'react-loadingg';
import Coach from './Coach';
import { fetchCoachesObj, bookAppointment } from './coachesSlice';

const Coaches = () => {
  const status = useSelector(state => state.careerCoaches.status);
  const coaches = useSelector(state => state.careerCoaches.coachesObj.coaches);
  const images = useSelector(state => state.careerCoaches.coachesObj.images);
  let coachesItem;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoachesObj());
  }, [dispatch]);

  const bookTheAppointment = appointmentDetail => {
    dispatch(bookAppointment(appointmentDetail));
  };

  if (status === 'loading') {
    return <CommonLoading />;
  }

  if (status === 'rejected') {
    return (
      <h2 className="mt-5 px-5 text-center">
        There was an error fetching data from the API, please refresh the page again
      </h2>
    );
  }

  if (coaches) {
    coachesItem = coaches.map((coach, index) => {
      const coachImage = images[index];
      const key = coach.id;
      return (
        <Coach
          key={key}
          coachDetails={coach}
          coachImage={coachImage}
          handleClick={bookTheAppointment}
        />
      );
    });
  }

  return (
    <>
      <h2 className="text-center text-bold">Career Coaches</h2>
      <p className="text-center px-2">
        {`Here are a collection of all our amazing, dedicated and highly skilled career coaches.
        To book an an appointment with any, just pick a date and click on the "Book" button.`}
      </p>
      <div className="py-3 mx-auto d-flex flex-wrap justify-content-center">{coachesItem}</div>
    </>
  );
};

export default Coaches;
