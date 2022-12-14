import React from 'react';
import { useDispatch } from 'react-redux';
import { selectExamBoard } from './examBoardsSlice';
import'../../app/App.css';
import './examBoards.css';
import { data } from '../../data';

export function ExamBoards() {    
    const dispatch = useDispatch()
  
    return (
      <div className="examBoards">
          <h1>Select Exam Board</h1>
          <ul className="list-group list-group-horizontal mt-5 fs-5" >
          {data.examBoards.map((examBoardEntry) => (
           
              <button 
              className="list-group-item w-50  d-block text-decoration-none"
              onClick={() => dispatch(selectExamBoard({examBoard: examBoardEntry.name}))}
              key={examBoardEntry.id}
              >
                  {examBoardEntry.name}  
              </button>
            
          ))}
          </ul>
      </div>    
    );
  }
