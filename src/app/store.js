import { configureStore } from '@reduxjs/toolkit';
import examBoardReducer from '../features/examBoards/examBoardsSlice.js';
import menuReducer from '../features/menu/menuSlice.js';
import rowOfTubesReducer from '../features/rowOfTestTubes/rowOfTestTubesSlice';



export default configureStore({
    reducer: {
        examBoard: examBoardReducer,
        menu: menuReducer,
        rowOfTubes: rowOfTubesReducer
    }
  })

  