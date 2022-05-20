import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    signUp: (state, action) => {
      console.log('action', action);
      return [...state, localStorage.setItem('user', JSON.stringify(action.payload))];
    },
    logIn: (state, action) => {
      return () => {
        const currentUser = action.payload;
        console.log('currentUser', currentUser);
        const savedUser = localStorage.getItem('user');
        console.log('savedUser', savedUser);
        return;
        // if (currentUser.email !== savedUser.email) {
        //   return `We don't have any user register with that email. You must sign up`;
        // }

        // return [...state, action.payload];
      }
    }
  }
})

export const { signUp } = usersSlice.actions;

export const selectUsers = (state) => state.users;

export default usersSlice.reducer;
