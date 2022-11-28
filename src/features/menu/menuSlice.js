import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
    name: "menu",
    initialState: {
      reagentOptions: [],
      selectedReagent: 'no reagent selected yet',
      
    },
    reducers: {
      selectReagentOptions: (state, action) => {
        state.reagentOptions = action.payload;
      },
      selectReagent: (state, action) => {        
        state.selectedReagent = action.payload;
      }
      },
      
    
  });

  export const {
    selectReagent,
    selectReagentOptions,
 } = menuSlice.actions;
 
 export default menuSlice.reducer; 