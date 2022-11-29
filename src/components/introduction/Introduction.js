import {ExamBoards} from '../../features/examBoards/ExamBoards';
import React from 'react';
import '../../app/App.css';
import IntroMenu from '../../features/menu/IntroMenu';
import TextBox from '../textBox/textBox';


const Introduction = () => {
    return (
        <div >
            <p className="fs-5">
                This page features interactive simulations of all the reactions of transition metal ions specified in the AQA A-level
                chemistry syllabus. Click the test tubes to add the specified amounts of each reagent. There are also questions to help you commit
                all of the information to memory.
            </p>
            {/** */}
            <TextBox />
           <ExamBoards />
           
           <IntroMenu />
        </div>
    )
}

export default Introduction;