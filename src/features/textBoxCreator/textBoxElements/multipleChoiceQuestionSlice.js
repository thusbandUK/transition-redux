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
    initialState: {      
      //CHANGE THIS LATER
      //MCQId: 43,
      selectedAnswer: '',
      displayedFeedback: ''  
    },
    reducers: {
      selectMCQId: (state, action) => {
        state.MCQId = action.payload;                
      },
      selectAnswer: (state, action) => {
        state.selectedAnswer = action.payload;       
      },
      displayFeedback: (state, action) => {
        state.displayedFeedback = action.payload;
      }, 
      reset: (state) => {
        state.selectedAnswer = initialState.selectedAnswer;
        state.displayedFeedback = initialState.displayedFeedback;
      } 
    },
  });

  export const {
    selectMCQId,
    selectAnswer,
    displayFeedback, 
    reset
 } = multipleChoiceQuestionSlice.actions;
 
 export default multipleChoiceQuestionSlice.reducer;