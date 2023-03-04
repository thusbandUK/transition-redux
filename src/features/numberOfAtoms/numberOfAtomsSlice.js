import { createSlice } from '@reduxjs/toolkit';



export const numberOfAtomsSlice = createSlice({
    name: "numberOfAtoms",
    initialState: {      
      mass: 0,
      submittedMass: 0
    },
    reducers: {    
        inputMass: (state,action) => {
            state.mass = action.payload;
        },
        submitMass: (state,action) => {
            state.submittedMass = action.payload;
        }
      /*selectReactantsToObserve: (state, action) => {        
        state.reactantsToObserve = {}
        Object.entries(action.payload).forEach(([key, value]) => {
          state.reactantsToObserve = {...state.reactantsToObserve, [key]: observations}
        })
      },     
      inputInitialObservation: (state, action) => {
        state.reactantsToObserve[action.payload.metal][action.payload.observationNumber].input = action.payload.observation;
      },
      inputFinalObservation: (state, action) => {
        state.reactantsToObserve[action.payload.metal].final.input = action.payload.observation;
      },*//*
      logInitialObservation: (state, action) => {
        state.reactantsToObserve[action.payload.metal][action.payload.observationNumber].logged = action.payload.observation;
        state.reactantsToObserve[action.payload.metal].observationStage = action.payload.observationStage;
      },
      /*logFinalObservation: (state, action) => {
        state.reactantsToObserve[action.payload.metal].final.logged = action.payload.observation;
        state.reactantsToObserve[action.payload.metal].observationStage = action.payload.observationStage;
      },*/  /* 
      completeObservation: (state, action) => {
        state.reactantsToObserve[action.payload.metal].observationComplete = true;
      },  
      reset: (state) => {        
        state.reactantsToObserve = {};
      }*/
    },
  });

  export const {    
    inputMass,
    submitMass
    /*selectReactantsToObserve,
    inputInitialObservation,
    inputFinalObservation,
    logInitialObservation,
    logFinalObservation,      
    reset,
    completeObservation   */
 } = numberOfAtomsSlice.actions;
 
 export default numberOfAtomsSlice.reducer;