import { createSlice } from '@reduxjs/toolkit';

// Top level state for Stickies
export const stickiesSlice = createSlice({
  name: 'stickies',
  initialState: {
    stickies: [],
    deletedStickies: [],
  },
  reducers: {
    addSticky: (state, action) => {
      const newSticky = {
        id: state.stickies.length + state.deletedStickies.length + 1,
        title: action.payload.title,
        text: action.payload.text,
        color: action.payload.color,
        font: action.payload.font,
      };
      return {
        ...state,
        stickies: [...state.stickies, newSticky],
      };
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
