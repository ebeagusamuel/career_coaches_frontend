import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  coachesObj: [],
  appointments: [],
  message: null,
  status: 'idle',
  error: null,
};

export const fetchCoachesObj = createAsyncThunk('careerCoaches/fetchCoachesObj', async () => {
  const { token } = JSON.parse(window.localStorage.getItem('userObj'));

  const response = await fetch('https://career-coaches-api.herokuapp.com/coaches/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  return data;
});

export const fetchAppointments = createAsyncThunk('careerCoaches/fetchAppointments', async () => {
  const { token } = JSON.parse(window.localStorage.getItem('userObj'));

  const response = await fetch('https://career-coaches-api.herokuapp.com/appointments/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  return data;
});

export const bookAppointment = createAsyncThunk('careerCoaches/bookAppointment', async appointmentDetail => {
  const { token } = JSON.parse(window.localStorage.getItem('userObj'));

  const response = await fetch('https://career-coaches-api.herokuapp.com/appointments/', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(appointmentDetail),
  });
  const data = await response.json();

  return data;
});

/* eslint-disable camelcase */
export const cancelAppointment = createAsyncThunk('careerCoaches/cancelAppointment', async coachId => {
  const { token } = JSON.parse(window.localStorage.getItem('userObj'));
  const { coach_id } = coachId;

  const response = await fetch(`https://career-coaches-api.herokuapp.com/appointments/${coach_id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(coachId),
  });
  const data = await response.json();

  return data;
});

const coachesSlice = createSlice({
  name: 'careerCoaches',
  initialState,
  reducers: {
    clearMessage: (state, action) => {
      const newState = state;
      newState.message = action.payload;
      return newState;
    },
  },
  extraReducers: {
    [fetchCoachesObj.pending]: state => {
      const newState = state;
      newState.status = 'loading';
      return newState;
    },
    [fetchCoachesObj.fulfilled]: (state, action) => {
      const newState = state;
      newState.status = 'fulfilled';
      newState.coachesObj = action.payload;
      newState.error = null;
      return newState;
    },
    [fetchCoachesObj.rejected]: (state, action) => {
      const newState = state;
      newState.status = 'rejected';
      newState.error = action.error;
      return newState;
    },
    [fetchAppointments.pending]: state => {
      const newState = state;
      newState.status = 'loading';
      return newState;
    },
    [fetchAppointments.fulfilled]: (state, action) => {
      const newState = state;
      newState.status = 'fulfilled';
      newState.appointments = action.payload;
      newState.error = null;
      return newState;
    },
    [fetchAppointments.rejected]: (state, action) => {
      const newState = state;
      newState.status = 'rejected';
      newState.error = action.error;
      return newState;
    },
    [bookAppointment.pending]: state => {
      const newState = state;
      newState.status = 'loading';
      return newState;
    },
    [bookAppointment.fulfilled]: (state, action) => {
      const newState = state;
      newState.status = 'fulfilled';
      if (action.payload.error) {
        newState.error = action.payload.error;
        return newState;
      }
      newState.message = action.payload.message;
      newState.error = null;
      return newState;
    },
    [bookAppointment.rejected]: (state, action) => {
      const newState = state;
      newState.status = 'rejected';
      newState.error = action.error;
      return newState;
    },
    [cancelAppointment.pending]: state => {
      const newState = state;
      newState.status = 'loading';
      return newState;
    },
    [cancelAppointment.fulfilled]: (state, action) => {
      const newState = state;
      newState.status = 'fulfilled';
      newState.appointments = newState.appointments.filter(
        appointment => appointment.coach_id !== action.payload.coach_id,
      );
      newState.message = action.payload.message;
      newState.error = null;
      return newState;
    },
    [cancelAppointment.rejected]: (state, action) => {
      const newState = state;
      newState.status = 'rejected';
      newState.error = action.error;
      return newState;
    },
  },
});

export const { clearMessage } = coachesSlice.actions;
export default coachesSlice.reducer;
