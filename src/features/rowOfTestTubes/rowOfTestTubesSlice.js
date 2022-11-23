import { createSlice } from '@reduxjs/toolkit';


export const rowOfTestTubesSlice = createSlice({
    name: "rowOfTubes",
    initialState: {
      unreactedMetals: []
    },
    reducers: {
      selectUnreactedMetals: (state, action) => {
        state.unreactedMetals = action.payload;
        /*
        state.selectedExamBoard = action.payload.examBoard;
        state.reagentOptions = data.reagentOptions.filter((reagent) => {
          if (reagent.true.includes(action.payload.examBoard)){
            delete reagent.true;
            return reagent;
           // return {id: reagent.id,
              //name: reagent.name};
              */
          }          
    }
  });
      

  export const {
    selectUnreactedMetals,
 } = rowOfTestTubesSlice.actions;
 
 export default rowOfTestTubesSlice.reducer;

 /*
  export const {
    selectExamBoard,
 } = examBoardSlice.actions;
 
 export default examBoardSlice.reducer;
 */