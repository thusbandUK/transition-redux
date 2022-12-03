import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectExamBoard } from './examBoardsSlice';
import'../../app/App.css';
import './examBoards.css';
import { data } from '../../data';

export function ExamBoards() {    
    const dispatch = useDispatch()
    const examBoard = useSelector(state => state.examBoard.selectedExamBoard);
/*
    useEffect(() => {
        alert('useEffect called');
        localStorage.clear();

    }, [examBoard])

    const dispatchExamBoardSelection = (event) => {
        alert(typeof(event.currentTarget));
        localStorage.clear();
        dispatch(selectExamBoard({examBoard: event.target.value.name}));
    }
  */
    return (
      <div className="examBoards">
          <h1>Select Exam Board</h1>
          <ul className="list-group list-group-horizontal mt-5 fs-5" >
          {data.examBoards.map((examBoardEntry) => (
           
              <button 
              className="list-group-item w-50  d-block text-decoration-none"            
              key={examBoardEntry.id}              
              onClick={() => dispatch(selectExamBoard({examBoard: examBoardEntry.name}))}
              >
                  {examBoardEntry.name}  
              </button>
            
          ))}
          </ul>
      </div>    
    );
  }

  //onClick={() => dispatch(selectExamBoard({examBoard: examBoardEntry.name}))}
  //onClick={dispatchExamBoardSelection(examBoardEntry.name)}
  //onClick={() => dispatch(selectExamBoard({examBoard: examBoardEntry.name}))}

  //onClick={() => dispatch(selectExamBoard({examBoard: examBoardEntry.name}))}
  //onClick={dispatchExamBoardSelection}