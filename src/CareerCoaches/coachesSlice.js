import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  coachesObj: [],
  appointments: [],
  message: null,
  status: 'idle',
  error: null,
};

export const fetchCoachesObj = createAsyncThunk('careerCoaches/fetchCoachesObj', async token => {
  const response = await fetch('http://localhost:3001/coaches/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  return data;
});

export const fetchAppointments = createAsyncThunk('careerCoaches/fetchAppointments', async token => {
  const response = await fetch('http://localhost:3001/appointments/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  return data;
});

const coachesSlice = createSlice({
  name: 'careerCoaches',
  initialState,
  reducers: {
    // logout: (state, action) => {
    //   const newState = state;
    //   window.localStorage.removeItem('userObj');
    //   newState.loggedIn = action.payload;
    //   return newState;
    // },
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
  },
});

export default coachesSlice.reducer;
