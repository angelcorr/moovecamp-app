import { createSlice } from "@reduxjs/toolkit";

const name = 'users';

const saveState = (state) => localStorage.setItem('name', JSON.stringify(state));
const loadInitialState = () => JSON.parse(localStorage.getItem(name)) || [];

export const usersSlice = createSlice({
  name,
  initialState: loadInitialState(),
  reducers: {
    signUp: (state, action) => {
      const newUser = action.payload;
      const newState = [...state, newUser];
      saveState(newState)
      return newState;
    },
    logIn: (state, action) => {
      return state;
    }
  }
})

export const { signUp, logIn } = usersSlice.actions;

export const selectUsers = (state) => state.users;

export const singUpThunk = (newUser) => (dispatch, getState) => {
  const users = selectUsers(getState());
  const existingUser = users.find((user) => user.email.toLowerCase() === newUser.email.toLowerCase());
  if (existingUser) return 'User already exists';

  dispatch(signUp(newUser));
  return true;
}

export default usersSlice.reducer;
