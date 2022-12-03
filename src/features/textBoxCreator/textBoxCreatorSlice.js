import { createSlice } from '@reduxjs/toolkit';

const initialState = {      
  selectedSection: 'introPage',
  selectedPage: 1,
  leftDisabled: true,
  rightDisabled: false
}


export const textBoxCreatorSlice = createSlice({
    name: "textBoardCreator",
    initialState: initialState,
    reducers: {
      selectSection: (state, action) => {
        state.selectedSection = action.payload;                
      },
      selectPage: (state, action) => {
        state.selectedPage = action.payload;       
      },
      disableLeft: (state, action) => {
        state.leftDisabled = action.payload; 
      },
      disableRight: (state, action) => {
        state.rightDisabled = action.payload; 
      }, 
      reset: (state) => {
        state = initialState;
      ;}       
    },
  });

  export const {
    selectSection,
    selectPage, 
    disableLeft,
    disableRight,
    reset
 } = textBoxCreatorSlice.actions;
 
 export default textBoxCreatorSlice.reducer;