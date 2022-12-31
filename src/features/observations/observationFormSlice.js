import { createSlice } from '@reduxjs/toolkit';
//import { useSelector } from 'react-redux';

const observations = {
  observationStage: 1,
  initial:
  {input: {}, logged: {}},
  final:
  {input: {}, logged: {}}
}

export const observationFormSlice = createSlice({
    name: "observationForm",
    initialState: {      
      reactantsToObserve: {   
      }
      //, 
      //reactantsToObserve3: {}
      
    },
    reducers: {        
      selectReactantsToObserve: (state, action) => {
        state.reactantsToObserve = action.payload;                
      },
      selectReactantsToObserve2: (state, action) => {
        //console.log(action.payload);
        //state.reactantsToObserve = action.payload;                
        state.reactantsToObserve = {}
        Object.entries(action.payload).forEach(([key, value]) => {
          state.reactantsToObserve = {...state.reactantsToObserve, [key]: observations}
        })
      },
     /* selectReactantsToObserve3: (state, action) => {
        state.reactantsToObserve3 = {...state.reactantsToObserve3, [action.payload.metal]: action.payload.observations};

      },*/
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
      inputInitialObservation2: (state, action) => {
        
        state.rowOfTubes.unreactedMetals2[action.payload.metal].observations.initial.input = action.payload.observation;
      },
      inputFinalObservation2: (state, action) => {
        state.rowOfTubes.unreactedMetals2[action.payload.metal].observations.final.input = action.payload.observation;
      },
      logInitialObservation2: (state, action) => {
        state.rowOfTubes.unreactedMetals2[action.payload.metal].observations.initial.logged = action.payload.observation;
        state.rowOfTubes.unreactedMetals2[action.payload.metal].observations.observationStage = action.payload.observationStage;
      },
      logFinalObservation2: (state, action) => {
        state.rowOfTubes.unreactedMetals2[action.payload.metal].observations.final.logged = action.payload.observation;
        state.rowOfTubes.unreactedMetals2[action.payload.metal].observations.observationStage = action.payload.observationStage;
      }, 
      reset: (state) => {        
        state.reactantsToObserve = {};
      }
      
      
    },
  });

  export const {
    selectReactantsToObserve,
    selectReactantsToObserve2,
    inputInitialObservation,
    inputFinalObservation,
    logInitialObservation,
    logFinalObservation,
    inputInitialObservation2,
    inputFinalObservation2,
    logInitialObservation2,
    logFinalObservation2,
    //selectReactantsToObserve3,
    reset   
 } = observationFormSlice.actions;
 
 export default observationFormSlice.reducer;