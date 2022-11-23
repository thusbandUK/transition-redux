import { createSlice } from '@reduxjs/toolkit';

const initialState = {  
    products: {
      copper: {link: '', opaque: null},
      cobalt: {link: '', opaque: null},
      "iron II": {link: '', opaque: null},
      "iron III": {link: '', opaque: null},
      aluminium: {link: '', opaque: null},
      manganese: {link: '', opaque: null},
      chromium: {link: '', opaque: null}
  } 
  };


export const rowOfTestTubesSlice = createSlice({
    name: "rowOfTubes",
    initialState: {
      unreactedMetals: [],
      initialState
    },     
    reducers: {
      selectUnreactedMetals: (state, action) => {
        state.unreactedMetals = action.payload;        
          },
      showProducts: (state, action) => {
        state.products[action.payload.metal] = action.payload.details;

        //state.products = action.payload.metal;

      },
      reset: () => initialState,
    }
    
  });
      

  export const {
    selectUnreactedMetals,
    showProducts,
    reset,
 } = rowOfTestTubesSlice.actions;
 
 export default rowOfTestTubesSlice.reducer;

 /*
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