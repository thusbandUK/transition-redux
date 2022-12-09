import {ExamBoards} from '../../features/examBoards/ExamBoards';
import React, { useEffect } from 'react';
import '../../app/App.css';
import IntroMenu from '../../features/menu/IntroMenu';
import TextBoxCreator from '../../features/textBoxCreator/TextBoxCreator';
import { useSelector } from 'react-redux';
//import { getState } from 'react';
import MultipleChoiceQuestion from '../../features/textBoxCreator/textBoxElements/MultipleChoiceQuestion';


const Introduction = () => {
    const examBoard = useSelector(state => state.examBoard.selectedExamBoard);

    

    //alert(getState());
    return (
        <div >
            <p className="fs-5">
                This page features interactive simulations of all the reactions of transition metal ions specified in the AQA A-level
                chemistry syllabus. Click the test tubes to add the specified amounts of each reagent. There are also questions to help you commit
                all of the information to memory.
            </p>
            
            
            <div style={{marginTop: '5%'}}>
           <ExamBoards />
           </div>
           {/**
           <MultipleChoiceQuestion />
 */}
           {/** 
           <div style={{marginTop: '5%'}}>
           {examBoard ? <TextBoxCreator /> : null} 
           </div>*/ }
           <IntroMenu />
        </div>
    )
}

export default Introduction;