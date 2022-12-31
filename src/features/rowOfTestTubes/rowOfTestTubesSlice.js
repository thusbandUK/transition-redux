import { createSlice } from '@reduxjs/toolkit';

//const initialState = {  
    const products = {
      copper: {link: '', opaque: null},
      cobalt: {link: '', opaque: null},
      "iron II": {link: '', opaque: null},
      "iron III": {link: '', opaque: null},
      aluminium: {link: '', opaque: null},
      manganese: {link: '', opaque: null},
      chromium: {link: '', opaque: null}
  } 
  //};
  const products2 = {
    link: '', opaque: null
  }
  const observationDetails = {observationStage: 1}
  //, initial: {input: '', logged: ''}, final: {input: '', logged: ''}


export const rowOfTestTubesSlice = createSlice({
    name: "rowOfTubes",
    initialState: {
      //unreactedMetals: [],
      //products, 
      unreactedMetals2: {}
      
    },     
    reducers: {
      /*
      selectUnreactedMetals: (state, action) => {
        state.unreactedMetals = action.payload;        
          },
          */
      selectUnreactedMetals2: (state, action) => {
        //state.unreactedMetals2 = action.payload;
       // state.unreactedMetals2 = Object.entries(action.payload).forEach(([key, value]) => {
       //   return {[key]: {...value}}
     // })
     state.unreactedMetals2 = {}
     Object.entries(action.payload).forEach(([key, value]) => {
      return state.unreactedMetals2 = {...state.unreactedMetals2, [key]: {...value, product: products2, observationStage: 1}}
     })
    },
    /*
      showProducts: (state, action) => {
        state.products[action.payload.metal] = action.payload.details;

        //state.products = action.payload.metal;

      },
      */
      showProducts2: (state, action) => {
        state.unreactedMetals2[action.payload.metal].product = action.payload.details

      },
      incrementObservationStage: (state, action) => {
        state.unreactedMetals2[action.payload.metal].observationStage = action.payload.newObservationStage;
      },
      /*
      reset: (state) => {
        state.products = products;
      },
      */
      reset2: (state) => {
        Object.entries(state.unreactedMetals2).forEach(([key, value]) => {
          state.unreactedMetals2[key] = {...value, product: products2}
        })
      }
    }
    
  });
      

  export const {
    selectUnreactedMetals,
    showProducts,
    reset,
    selectUnreactedMetals2,
    showProducts2,
    reset2,
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