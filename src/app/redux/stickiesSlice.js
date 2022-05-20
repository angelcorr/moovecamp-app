import { createSlice } from "@reduxjs/toolkit";

const initialState = [
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
  initialState,
  reducers: {
    addSticky: (state, action) => {
      return [...state, { id: state.length + 1, title: action.payload.title, text: action.payload.text  }];
    },
    removeSticky: (state, action) => {
      return state.filter((sticky) => sticky.id !== action.payload.id).map((sticky, index) => ({ ...sticky, id: index + 1 }));
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
