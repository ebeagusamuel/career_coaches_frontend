import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FlashMessage from 'react-flash-message';
import Coach from './Coach';
import { bookAppointment, clearMessage } from './coachesSlice';

const Coaches = () => {
  const status = useSelector(state => state.careerCoaches.status);
  const message = useSelector(state => state.careerCoaches.message);
  const { coaches, images } = useSelector(state => state.careerCoaches.coachesObj);
  let coachesItem;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage(null));
  }, [dispatch]);

  const bookTheAppointment = appointmentDetail => {
    dispatch(bookAppointment(appointmentDetail));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'rejected') {
    return (
      <h2 className="mt-5 px-5 text-center">
        There was an error fetching data from the API, please refresh the page again
      </h2>
    );
  }

  if (coaches) {
    coachesItem = coaches.map(coach => {
      const coachImage = images.find(image => image.coach_id === coach.id).image;
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
      {message && (
      <FlashMessage duration={3000} persistOnHover="true">
        <p className="bg-primary w-75 mx-auto text-center text-light">
          <strong>{message}</strong>
        </p>
      </FlashMessage>
      )}
      <div className="py-3 mx-auto d-flex flex-wrap justify-content-center">{coachesItem}</div>
    </>
  );
};

export default Coaches;
