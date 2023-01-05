import { createSlice } from '@reduxjs/toolkit';

const observations = {  
  1:
  {input: {}, logged: {}},
  2:
  {input: {}, logged: {}},
  3:
  {input: {}, logged: {}}
}

export const observationFormSlice = createSlice({
    name: "observationForm",
    initialState: {      
      reactantsToObserve: {   
      }      
    },
    reducers: {    
      selectReactantsToObserve: (state, action) => {        
        state.reactantsToObserve = {}
        Object.entries(action.payload).forEach(([key, value]) => {
          state.reactantsToObserve = {...state.reactantsToObserve, [key]: observations}
        })
      },     
      inputInitialObservation: (state, action) => {
        state.reactantsToObserve[action.payload.metal][action.payload.observationNumber].input = action.payload.observation;
      },
      /*inputFinalObservation: (state, action) => {
        state.reactantsToObserve[action.payload.metal].final.input = action.payload.observation;
      },*/
      logInitialObservation: (state, action) => {
        state.reactantsToObserve[action.payload.metal][action.payload.observationNumber].logged = action.payload.observation;
        state.reactantsToObserve[action.payload.metal].observationStage = action.payload.observationStage;
      },
      /*logFinalObservation: (state, action) => {
        state.reactantsToObserve[action.payload.metal].final.logged = action.payload.observation;
        state.reactantsToObserve[action.payload.metal].observationStage = action.payload.observationStage;
      },*/     
      reset: (state) => {        
        state.reactantsToObserve = {};
      }
    },
  });

  export const {    
    selectReactantsToObserve,
    inputInitialObservation,
    inputFinalObservation,
    logInitialObservation,
    logFinalObservation,      
    reset   
 } = observationFormSlice.actions;
 
 export default observationFormSlice.reducer;