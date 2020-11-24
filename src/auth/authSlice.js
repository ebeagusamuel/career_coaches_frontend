import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  user: null,
  status: 'idle',
  error: null,
};

export const createUser = createAsyncThunk('auth/createUser', async newUser => {
  const response = await fetch('http://localhost:3001/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
  const data = await response.json();

  return data;
});

export const loginUser = createAsyncThunk('auth/loginUser', async user => {
  const response = await fetch('localhost:3000/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: user,
  });
  const data = await response.json();

  return data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // logout: (state, action) => {
    //   const newState = state;
    //   newState.league = action.payload;
    //   return newState;
    // },
  },
  extraReducers: {
    [createUser.pending]: state => {
      const newState = state;
      newState.status = 'loading';
      return newState;
    },
    [createUser.fulfilled]: (state, action) => {
      const newState = state;
      newState.status = 'fulfilled';
      newState.loggedIn = true;
      newState.user = action.payload;
      window.localStorage.setItem('userObj', JSON.stringify(action.payload));
      return newState;
    },
    [createUser.rejected]: (state, action) => {
      const newState = state;
      newState.status = 'rejected';
      newState.error = action.payload;
      return newState;
    },
    [loginUser.pending]: state => {
      const newState = state;
      newState.status = 'loading';
      return newState;
    },
    [loginUser.fulfilled]: (state, action) => {
      const newState = state;
      newState.status = 'fulfilled';
      newState.loggedIn = true;
      newState.user = action.payload;
      return newState;
    },
    [loginUser.rejected]: (state, action) => {
      const newState = state;
      newState.status = 'rejected';
      newState.error = action.error;
      return newState;
    },
  },
});

// export const { setLeague } = highlightsSlice.actions;
export default authSlice.reducer;
