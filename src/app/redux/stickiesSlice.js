/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';

const name = 'stickies';
const initialState = {};
const userInitialState = {
  stickies: [],
  deletedStickies: [],
};

const saveState = (state) => localStorage.setItem(name, JSON.stringify(state));
const loadInitialState = () => JSON.parse(localStorage.getItem(name)) ?? initialState;

// Top level state for Stickies
export const stickiesSlice = createSlice({
  name,
  initialState: loadInitialState(),
  reducers: {
    addSticky: (state, action) => {
      const userStickies = state[action.payload.email] ?? userInitialState;
      const newSticky = {
        id: userStickies.stickies.length
        + userStickies.deletedStickies.length
        + 1,
        title: action.payload.title,
        text: action.payload.text,
        color: action.payload.color,
        font: action.payload.font,
      };
      const newUserStickies = { ...userStickies, stickies: [...userStickies.stickies, newSticky] };
      const newState = {
        ...state,
        [action.payload.email]: newUserStickies,
      };
      saveState(newState);
      return newState;
    },
    removeSticky: (state, action) => {
      const userStickies = state[action.payload.email] ?? userInitialState;
      const stickyId = action.payload.id;
      const stickyToDelete = (
        userStickies.stickies.find((sticky) => sticky.id === stickyId)
      );
      const newUserStickies = userStickies.stickies.filter((sticky) => sticky.id !== stickyId);
      const newUserDeletedStickies = [...userStickies.deletedStickies, stickyToDelete];
      const newState = {
        ...state,
        [action.payload.email]: {
          stickies: newUserStickies,
          deletedStickies: newUserDeletedStickies,
        },
      };
      saveState(newState);
      return newState;
    },
    restoreASticky: (state, action) => {
      const userStickies = state[action.payload.email] ?? userInitialState;
      const stickyId = action.payload.id;
      const newUserDeletedStickies = (
        userStickies.deletedStickies.filter((sticky) => sticky.id !== stickyId)
      );
      const stickyToRestore = userStickies.deletedStickies.find((sticky) => sticky.id === stickyId);
      const newState = {
        ...state,
        [action.payload.email]: {
          deletedStickies: newUserDeletedStickies,
          stickies: [...userStickies.stickies, stickyToRestore],
        },
      };
      saveState(newState);
      return newState;
    },
    changeTitle: (state, action) => {
      const userStickies = state[action.payload.email] ?? userInitialState;
      const stickyId = action.payload.id;
      const newUserStickies = userStickies.stickies.map((sticky) => (
        sticky.id === stickyId ? { ...sticky, title: action.payload.title } : sticky
      ));
      const newState = {
        ...state,
        [action.payload.email]: {
          ...state[action.payload.email],
          stickies: newUserStickies,
        },
      };
      saveState(newState);
      return newState;
    },
    changeText: (state, action) => {
      const userStickies = state[action.payload.email] ?? userInitialState;
      const stickyId = action.payload.id;
      const newUserStickies = userStickies.stickies.map((sticky) => (
        sticky.id === stickyId ? { ...sticky, text: action.payload.text } : sticky
      ));
      const newState = {
        ...state,
        [action.payload.email]: {
          ...state[action.payload.email],
          stickies: newUserStickies,
        },
      };
      saveState(newState);
      return newState;
    },
    changeColor: (state, action) => {
      const userStickies = state[action.payload.email] ?? userInitialState;
      const stickyId = action.payload.id;
      const newUserStickies = userStickies.stickies.map((sticky) => (
        sticky.id === stickyId ? { ...sticky, color: action.payload.color } : sticky
      ));
      const newState = {
        ...state,
        [action.payload.email]: {
          ...state[action.payload.email],
          stickies: newUserStickies,
        },
      };
      saveState(newState);
      return newState;
    },
    changeTextFont: (state, action) => {
      const userStickies = state[action.payload.email] ?? userInitialState;
      const stickyId = action.payload.id;
      const newUserStickies = userStickies.stickies.map((sticky) => (
        sticky.id === stickyId ? { ...sticky, font: action.payload.font } : sticky
      ));
      const newState = {
        ...state,
        [action.payload.email]: {
          ...state[action.payload.email],
          stickies: newUserStickies,
        },
      };
      saveState(newState);
      return newState;
    },
    removeAllStickiesFromTrash: (state, action) => {
      const userStickies = state[action.payload.email] ?? userInitialState;
      const newUserStickies = { ...userStickies, deletedStickies: [] };
      const newState = {
        ...state,
        [action.payload.email]: newUserStickies,
      };
      saveState(newState);
      return newState;
    },
  },
});

export const {
  addSticky,
  removeSticky,
  changeTitle,
  changeText,
  changeColor,
  removeAllStickiesFromTrash,
  restoreASticky,
  changeTextFont,
} = stickiesSlice.actions;

export const selectStickies = (state) => (
  (state.stickies[state.users.userLoggedIn.email] ?? userInitialState).stickies
);

export const selectDeletedStickies = (state) => (
  (state.stickies[state.users.userLoggedIn.email] ?? userInitialState).deletedStickies
);

export default stickiesSlice.reducer;
