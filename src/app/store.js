import { createStore, combineReducers } from 'redux';
//import allRecipesReducer from '../features/allRecipes/allRecipesSlice.js';
import { configureStore } from '@reduxjs/toolkit';
//import favoriteRecipesReducer from '../features/favoriteRecipes/favoriteRecipesSlice.js';
import { selectExamBoard } from '../features/examBoards/examBoardsSlice.js';

/*
export default createStore(combineReducers({
  examBoard: examBoardReducer
}));
*/

export default configureStore({
    reducer: {
        examBoards: selectExamBoard
    }
  })

  /*
const store = configureStore({reducer: 
 {examBoard: examBoardReducer}
});

export default store;

*/