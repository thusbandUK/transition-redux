import {ExamBoards} from '../../features/examBoards/ExamBoards';
import React from 'react';
import '../../app/App.css';


const Introduction = () => {
    return (
        <div >
            <p class="fs-5">
                This page features interactive simulations of all the reactions of transition metal ions specified in the AQA A-level
                chemistry syllabus. Click the test tubes to add the specified amounts of each reagent. There are also questions to help you commit
                all of the information to memory.
            </p>
           <ExamBoards />
        </div>
    )
}

export default Introduction;