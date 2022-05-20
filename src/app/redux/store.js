import { configureStore } from '@reduxjs/toolkit';
import stickiesReducer from './stickiesSlice';
import usersReducer from './usersSlice';

export const store = configureStore({
  reducer: {
    stickies: stickiesReducer,
    users: usersReducer
  },
});
