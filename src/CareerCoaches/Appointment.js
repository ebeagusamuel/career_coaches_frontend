import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable camelcase */
const Appointment = ({
  coachDetails, coachImage, date, handleClick,
}) => {
  const {
    id, name, location, phone_number,
  } = coachDetails;

  return (
    <div className="card m-3 shadow" style={{ width: '18rem' }}>
      <img
        className="card-img-top img-fluid"
        src={`http://localhost:3001/${coachImage}`}
        alt={name}
      />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <small>Name: </small>
          {name}
        </li>
        <li className="list-group-item">
          <small>Address: </small>
          {location}
        </li>
        <li className="list-group-item">
          <small>Phone Number: </small>
          {phone_number}
        </li>
        <li className="list-group-item">
          <small>Date: </small>
          {date}
        </li>
      </ul>
      <div className="card-body">
        <button
          onClick={() => handleClick({ coach_id: id })}
          type="button"
          className="card-link btn btn-primary"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

Appointment.propTypes = {
  coachDetails: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.string,
    phone_number: PropTypes.string,
    id: PropTypes.number.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  coachImage: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Appointment;
