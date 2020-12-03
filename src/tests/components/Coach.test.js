import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Coach from '../../CareerCoaches/Coach';

const dummyFunc = () => 'Called!';

const coachDetails = {
  name: 'Test Name',
  qualification: 'Test Qualification',
  location: 'Test Location',
  charge_per_hour: 'Test Charge',
  phone_number: 'Test Phone Number',
  id: 1,
};

test('renders a coach card', () => {
  render(
    <Coach coachDetails={coachDetails} coachImage="dummy Image" handleClick={dummyFunc} />,
  );
  expect(screen.getByText('Test Name')).toBeInTheDocument();
});
