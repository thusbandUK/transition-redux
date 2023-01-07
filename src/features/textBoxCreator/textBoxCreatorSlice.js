import { createSlice } from '@reduxjs/toolkit';

const initialState = {      
  selectedSection: 'introPage',
  selectedPage: 1,
  leftDisabled: true,
  rightDisabled: false,
  comparison: {
    similarities: {
      input: "",
      logged: ""
    },
    differences: {
      input: "",
      logged: ""
    }
  }
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
        state.comparison = {...state.comparison}
      },
      inputSimilarities: (state, action) => {
        state.comparison.similarities.input = action.payload;
      },
      inputDifferences: (state, action) => {
        state.comparison.differences.input = action.payload;
      },
      submitComparisons: (state, action) => {        
        state.comparison.similarities.logged = action.payload.similarities.input;
        state.comparison.differences.logged = action.payload.differences.input;
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