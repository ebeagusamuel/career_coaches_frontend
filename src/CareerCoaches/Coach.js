import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable camelcase */
const Coach = ({ coachDetails, coachImage, handleClick }) => {
  const {
    name, location, qualification, charge_per_hour, phone_number, id,
  } = coachDetails;
  const [datetime, setDatetime] = useState('');

  return (
    <div className="card m-3 shadow" style={{ width: '18rem' }}>
      <img className="card-img-top img-fluid" src={`http://localhost:3001/${coachImage}`} alt={name} />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <small>Name: </small>
          { name }
        </li>
        <li className="list-group-item">
          <small>Qualification: </small>
          { qualification }
        </li>
        <li className="list-group-item">
          <small>Address: </small>
          { location }
        </li>
        <li className="list-group-item">
          <small>Phone Number: </small>
          { phone_number }
        </li>
        <li className="list-group-item">
          <small>Charge per hour: </small>
          { charge_per_hour }
        </li>
        <li className="list-group-item">
          <label htmlFor="date">
            Choose a date
            <input onChange={e => setDatetime(e.target.value)} className="w-100 form-control" type="datetime-local" name="date" />
          </label>
        </li>
      </ul>
      <div className="card-body">
        <button onClick={() => handleClick({ coach_id: id, date: datetime })} type="button" className="card-link btn btn-primary" disabled={!datetime}>Book</button>
      </div>
    </div>
  );
};

Coach.propTypes = {
  coachDetails: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.string,
    charge_per_hour: PropTypes.string,
    phone_number: PropTypes.string,
    qualification: PropTypes.string,
    id: PropTypes.number.isRequired,
  }).isRequired,
  coachImage: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Coach;
