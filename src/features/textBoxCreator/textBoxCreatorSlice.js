import { createSlice } from '@reduxjs/toolkit';

export const textBoxCreatorSlice = createSlice({
    name: "textBoardCreator",
    initialState: {      
      selectedSection: '',
      selectedPage: 0,
      leftDisabled: true,
      rightDisabled: false
    },
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
      }       
    },
  });

  export const {
    selectSection,
    selectPage, 
    disableLeft,
    disableRight
 } = textBoxCreatorSlice.actions;
 
 export default textBoxCreatorSlice.reducer;