/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';

const name = 'stickies';
const initialState = {};
const userInitialState = {
  stickies: [],
  deletedStickies: [],
};

const saveState = (state) => localStorage.setItem(name, JSON.stringify(state));
const loadInitialState = () => JSON.parse(localStorage.getItem(name)) || initialState;

// Top level state for Stickies
export const stickiesSlice = createSlice({
  name,
  initialState: loadInitialState(),
  reducers: {
    addSticky: (state, action) => {
      console.log('state', state);
      const userStickies = state[action.payload.email] || userInitialState;
      console.log('state[action.payload.email]', userStickies);
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
      const stickyId = action.payload.id;
      const stickyToDelete = state.stickies.find((sticky) => sticky.id === stickyId);
      return {
        ...state,
        stickies: state.stickies.filter((sticky) => sticky.id !== stickyId),
        deletedStickies: [...state.deletedStickies, stickyToDelete],
      };
    },
    changeTitle: (state, action) => ({
      ...state,
      stickies: state.stickies.map((sticky) => (
        sticky.id === action.payload.id ? { ...sticky, title: action.payload.title } : sticky
      )),
    }),
    changeText: (state, action) => ({
      ...state,
      stickies: state.stickies.map((sticky) => (
        sticky.id === action.payload.id ? { ...sticky, text: action.payload.text } : sticky
      )),
    }),
    changeColor: (state, action) => ({
      ...state,
      stickies: state.stickies.map((sticky) => (
        sticky.id === action.payload.id ? { ...sticky, color: action.payload.color } : sticky
      )),
    }),
    changeTextFont: (state, action) => ({
      ...state,
      stickies: state.stickies.map((sticky) => (
        sticky.id === action.payload.id ? { ...sticky, font: action.payload.font } : sticky
      )),
    }),
    removeAllStickiesFromTrash: (state) => ({
      ...state,
      deletedStickies: [],
    }),
    restoreASticky: (state, action) => {
      const stickyId = action.payload.id;
      const stickyToRestore = state.deletedStickies.find((sticky) => sticky.id === stickyId);
      return {
        ...state,
        deletedStickies: state.deletedStickies.filter((sticky) => sticky.id !== stickyId),
        stickies: [...state.stickies, stickyToRestore],
      };
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

export const selectStickies = (state) => state.stickies;

export default stickiesSlice.reducer;
