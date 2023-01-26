import { createSlice } from '@reduxjs/toolkit';

const newObject = {
  id: {},
  selectedAnswer: '',
  displayedFeedback: ''
}


export const multipleChoiceQuestionSlice = createSlice({
    name: "multipleChoiceQuestion",
    initialState: {      
      MCQAnswers: []
    },
    reducers: {
      createMCQObject: (state, action) => {
        let checkIfObjectAlreadyAdded = state.MCQAnswers.some(x => x.id === action.payload.id);
        if (!checkIfObjectAlreadyAdded){
          state.MCQAnswers.push({...newObject, id: action.payload.id});
        }
      },      
      selectAnswer: (state, action) => {        
        state.MCQAnswers[action.payload.index].selectedAnswer = action.payload.answer;            
      },
      displayFeedback: (state, action) => {
        state.MCQAnswers[action.payload.index].displayedFeedback = action.payload.answerDetails;        
      },       
      reset: (state, action) => {        
        state.MCQAnswers[action.payload.index] = {...newObject, id: action.payload.MCQId};
      }  
    },
  });

  export const {
    createMCQObject,    
    selectAnswer,
    displayFeedback, 
    reset
 } = multipleChoiceQuestionSlice.actions;
 
 export default multipleChoiceQuestionSlice.reducer;