import { createSlice } from '@reduxjs/toolkit';

export const observationFormSlice = createSlice({
    name: "observationForm",
    initialState: {      
      reactantsToObserve: {} 
    },
    reducers: {        
      selectReactantsToObserve: (state, action) => {
        state.reactantsToObserve = action.payload;                
      },
      inputInitialObservation: (state, action) => {
        state.reactantsToObserve[action.payload.metal].initial.input = action.payload.observation;
      },
      inputFinalObservation: (state, action) => {
        state.reactantsToObserve[action.payload.metal].final.input = action.payload.observation;
      },
      logInitialObservation: (state, action) => {
        state.reactantsToObserve[action.payload.metal].initial.logged = action.payload.observation;
        state.reactantsToObserve[action.payload.metal].observationStage = action.payload.observationStage;
      },
      logFinalObservation: (state, action) => {
        state.reactantsToObserve[action.payload.metal].final.logged = action.payload.observation;
        state.reactantsToObserve[action.payload.metal].observationStage = action.payload.observationStage;
      },      
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