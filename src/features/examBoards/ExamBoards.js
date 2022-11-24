import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectExamBoard } from './examBoardsSlice';
import'../../app/App.css';
import { data } from '../../data';

export function ExamBoards() {    
    const dispatch = useDispatch()
  
    return (
      <div>
          <h1>Select Exam Board</h1>
          {data.examBoards.map((examBoardEntry) => (
              <button 
              className="list-group mt-4 fs-5 list-group-item bg-light"
              onClick={() => dispatch(selectExamBoard({examBoard: examBoardEntry}))}
              >
                  {examBoardEntry}  
              </button>
          ))}
      </div>    
    );
  }

