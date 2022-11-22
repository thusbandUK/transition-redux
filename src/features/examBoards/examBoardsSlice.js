import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../data';

export const examBoardSlice = createSlice({
    name: "examBoard",
    initialState: {
      selectedExamBoard: '',
      reagentOptions: []
    },
    reducers: {
      selectExamBoard: (state, action) => {
        state.selectedExamBoard = action.payload.examBoard;
        state.reagentOptions = data.reagentOptions.map((reagent) => {
          if (reagent.true.includes(action.payload.examBoard)){
            return {section: reagent.section,
              name: reagent.name};
          }          
        })
      },
      
    },
  });

  export const {
    selectExamBoard,
 } = examBoardSlice.actions;
 
 export default examBoardSlice.reducer;