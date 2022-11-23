/*

you'll need to update files including: 1) store and 2) Menu.js

okay so the goal of this slice is to update the state via useParams()

not only should clicking a link to go a page for a specified reactant change the title of that page, it should also automatically 
select the reactant

that also means the dropdown menu needs to be lost

but the main point is that changing page also updates the store

*/

import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../data';
import { useSelector, useDispatch } from 'react-redux';

//const examBoard = useSelector(state => state.examBoard.selectedExamBoard);

export const menuSlice = createSlice({
    name: "menu",
    initialState: {
      reagentOptions: [],
      selectedReagent: {},
      //metals: []

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

 /*
 
 state.metals = data.metalIdsByReagent.filter((x) => {
          //console.log(x.id);
          //return x.id === reagent;
          return data.metalIdsByReagent[useSelector(state => state.examBoard.selectedExamBoard)][action.payload.name].includes(x.id);
          })
 */