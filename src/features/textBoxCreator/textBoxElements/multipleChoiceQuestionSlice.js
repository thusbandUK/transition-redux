import { createSlice } from '@reduxjs/toolkit';
import { MCQData } from '../../../textDataTemp';

const initialState = {      
  //CHANGE THIS LATER
  MCQId: 42,
  selectedAnswer: '',
  displayedFeedback: ''  
}


export const multipleChoiceQuestionSlice = createSlice({
    name: "multipleChoiceQuestion",
    initialState: initialState,
    reducers: {
      selectMCQId: (state, action) => {
        state.MCQId = action.payload;                
      },
      selectAnswer: (state, action) => {
        state.selectedAnswer = action.payload;       
      },
      displayFeedback: (state, action) => {
        state.displayedFeedback = action.payload;
      }
    },
  });

  export const {
    selectMCQId,
    selectAnswer,
    displayFeedback
 } = multipleChoiceQuestionSlice.actions;
 
 export default multipleChoiceQuestionSlice.reducer;