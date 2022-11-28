import { createSlice } from '@reduxjs/toolkit';

/*
import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { decrement, increment } from "./slice";
import type { RootState } from "./index";

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(increment, decrement),
  effect: (action, listenerApi) =>
    localStorage.setItem(
      "count",
      JSON.stringify((listenerApi.getState() as RootState).counter)
    )
});
*/



export const examBoardSlice = createSlice({
    name: "examBoard",
    initialState: {
      selectedExamBoard: ''
    },
    reducers: {
      selectExamBoard: (state, action) => {
        state.selectedExamBoard = action.payload.examBoard;        
      },      
    },
  });

  export const {
    selectExamBoard,
 } = examBoardSlice.actions;
 
 export default examBoardSlice.reducer;