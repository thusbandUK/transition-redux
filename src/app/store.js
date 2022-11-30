import { configureStore } from '@reduxjs/toolkit';
import examBoardReducer from '../features/examBoards/examBoardsSlice.js';
import menuReducer from '../features/menu/menuSlice.js';
import textBoxCreatorReducer from '../features/textBoxCreator/textBoxCreatorSlice';
import rowOfTubesReducer from '../features/rowOfTestTubes/rowOfTestTubesSlice';
import { reHydrateStore, localStorageMiddleware } from '../features/examBoards/examBoardMiddleware';


export default configureStore({
    reducer: {
        examBoard: examBoardReducer,
        menu: menuReducer,
        rowOfTubes: rowOfTubesReducer,
        textBoxCreator: textBoxCreatorReducer
    },
    preloadedState: reHydrateStore(),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(localStorageMiddleware),
  
  })

  //imported exemplar from: https://stackoverflow.com/questions/68421040/local-storage-using-redux-toolkit
/*
  const store = configureStore({
    reducer: {
      movements: movementsSlice.reducer,
      auth: authSlice.reducer,
    },
    preloadedState: reHydrateStore(),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(localStorageMiddleware),
  });
  
  export const movementsActions = movementsSlice.actions;
  export const authActions = authSlice.actions;
  
  export default store;
  */