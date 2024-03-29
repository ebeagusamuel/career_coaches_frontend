import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  user: null,
  status: 'idle',
  error: null,
};

export const createUser = createAsyncThunk('auth/createUser', async newUser => {
  const response = await fetch('https://career-coaches-api.onrender.com/users/', {
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
  const response = await fetch('https://career-coaches-api.onrender.com/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();

  return data;
});

export const autoLogin = createAsyncThunk('auth/autoLogin', async token => {
  const response = await fetch('https://career-coaches-api.onrender.com/auto_login/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  return data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      const newState = state;
      window.localStorage.removeItem('userObj');
      newState.loggedIn = action.payload;
      return newState;
    },
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
      if (action.payload.error) {
        newState.error = action.payload.error;
        return newState;
      }
      newState.loggedIn = true;
      newState.user = action.payload.user.username;
      newState.error = null;
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
      if (action.payload.error) {
        newState.error = action.payload.error;
        return newState;
      }
      newState.loggedIn = true;
      newState.user = action.payload.user.username;
      newState.error = null;
      window.localStorage.setItem('userObj', JSON.stringify(action.payload));
      return newState;
    },
    [loginUser.rejected]: (state, action) => {
      const newState = state;
      newState.status = 'rejected';
      newState.error = action.error;
      return newState;
    },
    [autoLogin.pending]: state => {
      const newState = state;
      newState.status = 'loading';
      return newState;
    },
    [autoLogin.fulfilled]: (state, action) => {
      const newState = state;
      newState.status = 'fulfilled';
      newState.loggedIn = true;
      newState.user = action.payload.username;
      newState.error = null;
      return newState;
    },
    [autoLogin.rejected]: (state, action) => {
      const newState = state;
      newState.status = 'rejected';
      newState.error = action.error;
      return newState;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
