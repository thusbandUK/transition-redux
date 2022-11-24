import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectExamBoard } from './examBoardsSlice';
import'../../app/App.css';
import './examBoards.css';
import { data } from '../../data';

export function ExamBoards() {    
    const dispatch = useDispatch()
  
    return (
      <div>
          <h1>Select Exam Board</h1>
          <ul className="list-group list-group-horizontal mt-5 fs-5">
          {data.examBoards.map((examBoardEntry) => (
            <li
              className="list-group-item  w-50"              
            >
              <button 
              className="d-block text-decoration-none"
              onClick={() => dispatch(selectExamBoard({examBoard: examBoardEntry}))}
              >
                  {examBoardEntry}  
              </button>
            </li>
          ))}
          </ul>
      </div>    
    );
  }

  //className="list-group mt-4 fs-5 list-group-item bg-light"

  //bg-light