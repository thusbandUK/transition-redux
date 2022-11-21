import { createStore, combineReducers } from 'redux';
//import allRecipesReducer from '../features/allRecipes/allRecipesSlice.js';
import { configureStore } from '@reduxjs/toolkit';
//import favoriteRecipesReducer from '../features/favoriteRecipes/favoriteRecipesSlice.js';
import { selectExamBoard } from '../features/examBoards/examBoardsSlice.js';
import examBoardReducer from '../features/examBoards/examBoardsSlice.js';
import menuReducer from '../features/menu/menuSlice.js';

/*
export default createStore(combineReducers({
  examBoard: examBoardReducer
}));
*/

export default configureStore({
    reducer: {
        examBoard: examBoardReducer,
        menu: menuReducer
    }
  })

  /*
const store = configureStore({reducer: 
 {examBoard: examBoardReducer}
});

export default store;

*/