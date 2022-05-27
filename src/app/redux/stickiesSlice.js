import { createSlice } from '@reduxjs/toolkit';

//Top level state for Stickies
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
    changeColor: (state, action) => {
      console.log('action', action);
      return [...state, { className: action.payload.className }];
    },
    removeAllStickiesFromTrash: (state, action) => {
      return {
        ...state,
        deletedStickies: [],
      };
    },
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

export const { addSticky, removeSticky, changeColor, removeAllStickiesFromTrash, restoreASticky } =
  stickiesSlice.actions;

export const selectStickies = (state) => state.stickies;

export default stickiesSlice.reducer;
