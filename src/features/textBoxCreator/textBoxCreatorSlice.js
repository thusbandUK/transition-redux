import { createSlice } from '@reduxjs/toolkit';

const comparison = {
  id: {},
  similarities: {
    input: "",
    logged: ""
  },
  differences: {
    input: "",
    logged: ""
  }
}

const response = {
  id: {},
  equation: "",
  explanation: ""
}

const initialState = {      
  selectedSection: 'introPage',
  selectedPage: 1,
  leftDisabled: true,
  rightDisabled: false,
  comparison: [],
  writtenResponses: []
}


export const textBoxCreatorSlice = createSlice({
    name: "textBoardCreator",
    initialState: initialState,
    reducers: {
      selectSection: (state, action) => {
        state.selectedSection = action.payload;                
      },
      selectPage: (state, action) => {
        state.selectedPage = action.payload;       
      },
      disableLeft: (state, action) => {
        state.leftDisabled = action.payload; 
      },
      disableRight: (state, action) => {
        state.rightDisabled = action.payload; 
      },
      createComparisonSection: (state, action) => {        
        let checkIfObjectAlreadyAdded = state.comparison.some(x => x.id === action.payload.id);
        if (!checkIfObjectAlreadyAdded){
          state.comparison.push({...comparison, id: action.payload.id});
        }        
      },      
      inputSimilarities: (state, action) => {
        state.comparison[action.payload.index].similarities.input = action.payload.content;
      },
      inputDifferences: (state, action) => {
        state.comparison[action.payload.index].differences.input = action.payload.content;        
      },
      submitComparisons: (state, action) => {
        state.comparison[action.payload.index].similarities.logged = state.comparison[action.payload.index].similarities.input;
        state.comparison[action.payload.index].differences.logged = state.comparison[action.payload.index].differences.input;
      },
      createWrittenResponseSection: (state, action) => {     
        //console.log(action.payload);   
        let checkIfResponseObjectAlreadyAdded = state.writtenResponses.some(x => x.id === action.payload.id);
        if (!checkIfResponseObjectAlreadyAdded){
          state.writtenResponses.push(action.payload);
        }        
      },
      inputWrittenResponse: (state, action) => {
        state.writtenResponses[action.payload.index][action.payload.questionReference].input = action.payload.inputtedText;      
      },
      submitWrittenResponses: (state, action) => {
        console.log(action.payload.index);
        Object.entries(state.writtenResponses[action.payload.index]).map(([key, value]) => {
          console.log(action.payload.index);
          if (state.writtenResponses[action.payload.index][key].input)
          {return state.writtenResponses[action.payload.index][key].logged = state.writtenResponses[action.payload.index][key].input;}
        })
        //state.comparison[action.payload.index].similarities.logged = state.comparison[action.payload.index].similarities.input;
        //state.comparison[action.payload.index].differences.logged = state.comparison[action.payload.index].differences.input;
      },
      reset: (state) => {
        state = initialState;
      ;}       
    },
  });

  export const {
    selectSection,
    selectPage, 
    disableLeft,
    disableRight,
    createComparisonSection,
    inputSimilarities,
    inputDifferences,
    submitComparisons,
    createWrittenResponseSection,
    inputWrittenResponse,
    submitWrittenResponses,
    reset
 } = textBoxCreatorSlice.actions;
 
 export default textBoxCreatorSlice.reducer;