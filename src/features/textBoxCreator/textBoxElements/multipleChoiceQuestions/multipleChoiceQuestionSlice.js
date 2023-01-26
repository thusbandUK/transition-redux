import { createSlice } from '@reduxjs/toolkit';
import { MCQData } from '../../../../data/transitionMetalData/mcqData';

const initialState = {      
  
  selectedAnswer: '',
  displayedFeedback: ''   
}

const newObject = {
  id: {},
  selectedAnswer: '',
  displayedFeedback: ''
}


export const multipleChoiceQuestionSlice = createSlice({
    name: "multipleChoiceQuestion",
    initialState: {      
      selectedAnswer: '',
      displayedFeedback: '',
      MCQAnswers: []
    },
    reducers: {
      createMCQObject: (state, action) => {
        let checkIfObjectAlreadyAdded = state.MCQAnswers.some(x => x.id === action.payload.id);
        if (!checkIfObjectAlreadyAdded){
          state.MCQAnswers.push({...newObject, id: action.payload.id});
        }
      },
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
      },
      selectAnswer2: (state, action) => {        
        state.MCQAnswers[action.payload.index].selectedAnswer = action.payload.answer;            
      },
      displayFeedback2: (state, action) => {
        state.MCQAnswers[action.payload.index].displayedFeedback = action.payload.answerDetails;            
        //state.displayedFeedback = action.payload;
      },       
      reset2: (state, action) => {
        //state.selectedAnswer = initialState.selectedAnswer;
        //state.displayedFeedback = initialState.displayedFeedback;
        state.MCQAnswers[action.payload.index] = {...newObject, id: action.payload.MCQId};
      }  
    },
  });

  export const {
    createMCQObject,
    selectMCQId,
    selectAnswer,
    displayFeedback, 
    reset,
    selectAnswer2,
    displayFeedback2, 
    reset2
 } = multipleChoiceQuestionSlice.actions;
 
 export default multipleChoiceQuestionSlice.reducer;