import { createSlice } from "@reduxjs/toolkit";

const initialStickies = [
  { id: 1, title: 'nonel', text: "Chevechuvi" },
  { id: 2, title: 'yeska', text: "Chevechuvi es lo mas bello" },
  { id: 3, title: 'yeska', text: "Chevechuvi es lo mas bello de nuevo sisisis" },
  { id: 4, title: 'yeska', text: "Chevechuvi es lo mas bello de nuevo no se nada de eso aun que broma:(" },
  { id: 5, title: 'yeska', text: "Chevechuvi es lo mas bello de nuevo b" },
  { id: 6, title: 'yeska', text: "Chevechuvi es" },
  { id: 7, title: 'yeska', text: "Chevechuvi es lo mas bello de nuevo" }
];

//Top level state for Stickies
export const stickiesSlice = createSlice({
  name: 'stickies',
  initialState: {
    stickies: initialStickies,
    deletedStickies: [],
  },
  reducers: {
    addSticky: (state, action) => {
      return {
        ...state,
        stickies: [...state.stickies, { id: state.stickies.length + state.deletedStickies.length + 1, title: action.payload.title, text: action.payload.text  }]
      };
    },
    removeSticky: (state, action) => {
      const stickyId = action.payload.id;
      const stickyToDelete = state.stickies.find((sticky) => sticky.id === stickyId);
      return  {
        ...state,
        stickies: state.stickies.filter((sticky) => sticky.id !== action.payload.id),
        deletedStickies: [...state.deletedStickies, stickyToDelete]
      };
    },
     changeColor: (state, action) => {
       console.log('action', action);
       return [...state, { className: action.payload.className }];
     }
  }
});

export const { addSticky, removeSticky, changeColor } = stickiesSlice.actions;

export const selectStickies = (state) => state.stickies;

export default stickiesSlice.reducer;
