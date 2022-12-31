import { createSlice } from '@reduxjs/toolkit';


  const products = {
    link: '', opaque: null
  }
  const observationDetails = {observationStage: 1}
  //, initial: {input: '', logged: ''}, final: {input: '', logged: ''}


export const rowOfTestTubesSlice = createSlice({
    name: "rowOfTubes",
    initialState: {      
      unreactedMetals: {}
      
    },     
    reducers: {      
      selectUnreactedMetals: (state, action) => {        
        state.unreactedMetals = {}
        Object.entries(action.payload).forEach(([key, value]) => {
        return state.unreactedMetals = {...state.unreactedMetals, [key]: {...value, product: products, observationStage: 1}}
      })
      },    
      showProducts: (state, action) => {
        state.unreactedMetals[action.payload.metal].product = action.payload.details

      },
      incrementObservationStage: (state, action) => {
        state.unreactedMetals[action.payload.metal].observationStage = action.payload.newObservationStage;
      },      
      reset: (state) => {
        Object.entries(state.unreactedMetals).forEach(([key, value]) => {
          state.unreactedMetals[key] = {...value, product: products}
        })
      }
    }
    
  });
      

  export const {    
    selectUnreactedMetals,
    showProducts,
    reset,
    incrementObservationStage
 } = rowOfTestTubesSlice.actions;
 
 export default rowOfTestTubesSlice.reducer;

 /*

reset: () => initialState;

  export const {
    selectExamBoard,
 } = examBoardSlice.actions;
 
 export default examBoardSlice.reducer;

 products: {
        copper: {link: '', opaque: null},
        cobalt: {link: '', opaque: null},
        "iron II": {link: '', opaque: null},
        "iron III": {link: '', opaque: null},
        aluminium: {link: '', opaque: null},
        manganese: {link: '', opaque: null},
        chromium: {link: '', opaque: null}
    } 
 */