/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';

const name = 'users';

const saveState = (state) => localStorage.setItem(name, JSON.stringify(state));
const loadInitialState = () => (
  JSON.parse(localStorage.getItem(name)) || { users: [], userLoggedIn: null }
);

export const usersSlice = createSlice({
  name,
  initialState: loadInitialState(),
  reducers: {
    signUp: (state, action) => {
      const newUser = action.payload;
      const newState = { ...state, users: [...state.users, newUser], userLoggedIn: newUser.email };
      saveState(newState);
      return newState;
    },
    logIn: (state, action) => {
      const newUserLoggedIn = action.payload;
      const newState = { ...state, userLoggedIn: newUserLoggedIn.email };
      saveState(newState);
      return newState;
    },
    signOut: (state) => {
      const newState = { ...state, userLoggedIn: null };
      saveState(newState);
      return newState;
    },
  },
});

export const { signUp, logIn, signOut } = usersSlice.actions;

export const selectUsers = (state) => state.users.users;
export const selectUserLoggedIn = (state) => state.users.userLoggedIn;

// Thunks

export const singUpThunk = (newUser) => (dispatch, getState) => {
  const users = selectUsers(getState());
  const existingUser = users.find(
    (user) => user.email.toLowerCase() === newUser.email.toLowerCase(),
  );

  if (existingUser) return 'User already exists';

  dispatch(signUp(newUser));
  return true;
};

export const logInThunk = ({ email, password }) => (dispatch, getState) => {
  const users = selectUsers(getState());
  const verifyEmailUser = users.find(
    (user) => user.email.toLowerCase() === email.toLowerCase(),
  );

  const verifyPasswordUser = users.find((user) => user.password === password);

  if (!verifyEmailUser || !verifyPasswordUser) return 'The email or password are incorrect.';

  dispatch(logIn(verifyUser));

  return true;
};

export default usersSlice.reducer;
