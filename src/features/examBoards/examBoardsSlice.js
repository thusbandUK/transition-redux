import { createSlice } from '@reduxjs/toolkit';

export const examBoardSlice = createSlice({
    name: "examBoard",
    initialState: {board: ''},
    reducers: {
      selectExamBoard: (state, action) => {
        state.examBoard = action.payload.examBoard;
      },
      
    },
  });

  export const {
    selectExamBoard,
 } = examBoardSlice.actions;
 
 export default examBoardSlice.reducer;