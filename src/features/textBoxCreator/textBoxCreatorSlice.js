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

const initialState = {      
  selectedSection: 'introPage',
  selectedPage: 1,
  leftDisabled: true,
  rightDisabled: false,
  comparison: []
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
    reset
 } = textBoxCreatorSlice.actions;
 
 export default textBoxCreatorSlice.reducer;