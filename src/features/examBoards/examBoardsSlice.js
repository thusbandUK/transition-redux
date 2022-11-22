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
        state.reagentOptions = data.reagentOptions.filter((reagent) => {
          if (reagent.true.includes(action.payload.examBoard)){
            delete reagent.true;
            return reagent;
           // return {id: reagent.id,
              //name: reagent.name};
          }          
        })
      },
      
    },
  });

  export const {
    selectExamBoard,
 } = examBoardSlice.actions;
 
 export default examBoardSlice.reducer;