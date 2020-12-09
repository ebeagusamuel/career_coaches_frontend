import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Appointment from '../../feature/CareerCoaches/Appointment';

const dummyFunc = () => 'Called!';

const coachDetails = {
  name: 'Test Name',
  location: 'Test Location',
  phone_number: 'Test Phone Number',
  id: 1,
};

test('renders a coach card', () => {
  render(
    <Appointment coachDetails={coachDetails} coachImage="dummy Image" date="Wed Dec 02 2020 17:00:30 GMT+0100" handleClick={dummyFunc} />,
  );
  expect(screen.getByText('Test Name')).toBeInTheDocument();
});
