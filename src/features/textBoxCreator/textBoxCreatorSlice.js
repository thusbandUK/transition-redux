import { createSlice } from '@reduxjs/toolkit';

export const textBoxCreatorSlice = createSlice({
    name: "textBoardCreator",
    initialState: {      
      selectedSection: '',
      selectedPage: 0
    },
    reducers: {
      selectSection: (state, action) => {
        state.selectedSection = action.payload;                
      },
      selectPage: (state, action) => {
        state.selectedPage = action.payload;       
      },      
    },
  });

  export const {
    selectSection,
    selectPage
 } = textBoxCreatorSlice.actions;
 
 export default textBoxCreatorSlice.reducer;