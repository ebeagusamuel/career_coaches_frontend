import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FlashMessage from 'react-flash-message';
import { fetchAppointments, cancelAppointment, clearMessage } from './coachesSlice';
import Appointment from './Appointment';

/* eslint-disable camelcase */
const Appointments = () => {
  const status = useSelector(state => state.careerCoaches.status);
  const appointments = useSelector(state => state.careerCoaches.appointments);
  const coaches = useSelector(state => state.careerCoaches.coachesObj);
  const message = useSelector(state => state.careerCoaches.message);
  let appointmentItems;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage(null));
    dispatch(fetchAppointments());
  }, []);

  const cancelTheAppointment = coachId => {
    dispatch(cancelAppointment(coachId));
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

  if (appointments && coaches) {
    appointmentItems = appointments.map(appointment => {
      const { id, coach_id, date_and_time } = appointment;
      const coachDetails = coaches.find(coach => coach.id === coach_id);
      return (
        <Appointment
          key={id}
          coachDetails={coachDetails}
          date={date_and_time}
          handleClick={cancelTheAppointment}
        />
      );
    });
  }

  return (
    <div>
      <h4 className="w-75 mx-auto my-2 text-center">
        {appointments.length > 0 ? 'Here is a compilation of all your apppointments' : "You don't have any appointment"}
      </h4>
      {message && (
        <FlashMessage duration={3000} persistOnHover="true">
          <p className="bg-primary w-75 mx-auto text-center text-light">
            <strong>{message}</strong>
          </p>
        </FlashMessage>
      )}
      <div className="py-3 mx-auto d-flex flex-wrap justify-content-center">{appointmentItems}</div>
    </div>
  );
};

export default Appointments;
