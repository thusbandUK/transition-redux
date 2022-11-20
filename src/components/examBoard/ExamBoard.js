import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectExamBoard } from '../../features/examBoards/examBoardsSlice';
import { data } from '../../data';

export default function ExamBoard({board}) {
  //const dispatch = useDispatch();
  const [examBoard, setExamBoard] = useState('');
  //const transactions = useSelector(selectTransactions);

  
  const handleClick = (e) => {
    e.preventDefault();
    setExamBoard(e.target.value);
    //dispatch(selectExamBoard({ board: examBoard }));
  };



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


//onChange={(e) => handleClick(e.currentTarget.value)}
//className="list-group-item bg-light"
/*

<ul className="list-group mt-4 fs-5">
            {data.examBoards.map((x) => 
                (<li>{x}</li>)
            )}
        </ul>
*/