import { createSlice } from '@reduxjs/toolkit';

export const examBoardSlice = createSlice({
    name: "examBoard",
    initialState: {
      selectedExamBoard: ''
    },
    reducers: {
      selectExamBoard: (state, action) => {
        state.selectedExamBoard = action.payload.examBoard;        
      },      
    },
  });

  export const {
    selectExamBoard,
 } = examBoardSlice.actions;
 
 export default examBoardSlice.reducer;