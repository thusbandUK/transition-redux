import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../data';

export const examBoardSlice = createSlice({
    name: "examBoard",
    initialState: {
      selectedExamBoard: ''//,
      //reagentOptions: []
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