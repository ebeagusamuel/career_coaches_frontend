import { configureStore } from '@reduxjs/toolkit';
import authReducer from './feature/auth/authSlice';
import coachesReducer from './feature/CareerCoaches/coachesSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    careerCoaches: coachesReducer,
  },
});
