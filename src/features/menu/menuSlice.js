/*

you'll need to update files including: 1) store and 2) Menu.js

okay so the goal of this slice is to update the state via useParams()

not only should clicking a link to go a page for a specified reactant change the title of that page, it should also automatically 
select the reactant

that also means the dropdown menu needs to be lost

but the main point is that changing page also updates the store

*/

import { createSlice } from '@reduxjs/toolkit';


export const menuSlice = createSlice({
    name: "menu",
    initialState: {
      selectedReagent: ''
    },
    reducers: {
      selectReagent: (state, action) => {        
        state.selectedReagent = action.payload.reagent;
      },
      
    },
  });

  export const {
    selectReagent,
 } = menuSlice.actions;
 
 export default menuSlice.reducer;