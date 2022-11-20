import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectExamBoard } from './examBoardsSlice';
import'../../app/App.css';
import { data } from '../../data';

export function ExamBoards() {
    //const examBoard = useSelector(state => state.examBoard.board)
    //const dispatch = useDispatch()

    //const dispatch = useDispatch();
    //const [examBoard, setExamBoard] = useState('');
    //const transactions = useSelector(selectTransactions);
  
    /*
    const handleClick = (e) => {
      e.preventDefault();
      setExamBoard(e.target.value);
      //dispatch(selectExamBoard({ board: examBoard }));
    };
  */
  
  
    /*Okay so I think what's happening above is that an action is being dispatched via editBudget reducer in budgetsSlice.js
  
    so the object pass to the editBudget reducer (function?) has category and amount and that's what's referenced in budgetsSlice.js
  
    but of course this also links to the props, the object {budget} (line 6) that presumably links to the overall state
     */
  
    //alert(data.examBoards[0]);
  
  
    return (
      <div>
          <h1>Select Exam Board</h1>
          {data.examBoards.map((examBoard) => (
              <button 
              className="list-group mt-4 fs-5 list-group-item bg-light"
              
              >
                  {examBoard}
  
              </button>
          ))}
          
      </div>    
    );
  }

/*

dispatch(examBoard)

onClick={() => dispatch(examBoard)}

export function ExamBoards() {
    const examBoard = useSelector(state => state.examBoard)
    const dispatch = useDispatch()
  
    return (
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    )
  }

  */