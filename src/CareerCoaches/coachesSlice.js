import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const { token } = JSON.parse(window.localStorage.getItem('userObj'));
const initialState = {
  coachesObj: [],
  appointments: [],
  message: null,
  status: 'idle',
  error: null,
};

export const fetchCoachesObj = createAsyncThunk('careerCoaches/fetchCoachesObj', async () => {
  const response = await fetch('http://localhost:3001/coaches/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  return data;
});

export const fetchAppointments = createAsyncThunk('careerCoaches/fetchAppointments', async () => {
  const response = await fetch('http://localhost:3001/appointments/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  return data;
});

export const bookAppointment = createAsyncThunk('careerCoaches/bookAppointment', async appointmentDetail => {
  const response = await fetch('http://localhost:3001/book_appointment/', {
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

export const cancelAppointment = createAsyncThunk('careerCoaches/cancelAppointment', async coachId => {
  const response = await fetch('http://localhost:3001/cancel_appointment/', {
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
  reducers: {},
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

export default coachesSlice.reducer;
