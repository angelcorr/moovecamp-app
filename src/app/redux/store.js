import { configureStore } from '@reduxjs/toolkit';
import stickiesReducer from './stickiesSlice';
import usersReducer from './usersSlice';

const store = configureStore({
  reducer: {
    stickies: stickiesReducer,
    users: usersReducer,
  },
});

export default store;
