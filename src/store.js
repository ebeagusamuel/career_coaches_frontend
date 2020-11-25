import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import coachesReducer from './CareerCoaches/coachesSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    careerCoaches: coachesReducer,
  },
});
