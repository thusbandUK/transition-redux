import {ExamBoards} from '../../features/examBoards/ExamBoards';
import React, { useEffect } from 'react';
import '../../app/App.css';
import IntroMenu from '../../features/menu/IntroMenu';
import TextBoxCreator from '../../features/textBoxCreator/TextBoxCreator';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../../features/observations/observationFormSlice';
import { selectSection } from '../../features/textBoxCreator/textBoxCreatorSlice';
//import { getState } from 'react';



const Introduction = () => {
    const examBoard = useSelector(state => state.examBoard.selectedExamBoard);
    const dispatch = useDispatch();
/**/
    useEffect(() => {
        //console.log('useEffect called');
        dispatch(reset());
        dispatch(selectSection('introPage'));


    }, [dispatch]);

    /*
    useEffect(() => {
    dispatch(reset());
    dispatch(selectUnreactedMetals(generateMetalReactantsSet()));

}, [dispatch, generateMetalReactantsSet, reactant]);
    */

    //alert(getState());
    return (
        <div >
            <p className="fs-5">
                This page features interactive simulations of all the reactions of complex ions specified in the AQA, Edexcel, OCR A and OCR B 
                A-level chemistry syllabi. Click the test tubes to add the specified amounts of each reagent. There are also questions to help 
                you commit all of the information to memory.
            </p>
            
            
            <div style={{marginTop: '5%'}}>
           <ExamBoards />
           </div>
           {/** 
           <MultipleChoiceQuestion />
*/}
           {/** */ }
           <div style={{marginTop: '5%'}}>
           {examBoard ? <TextBoxCreator key="text-box-creator"/> : null} 
           </div>
           <IntroMenu />
        </div>
    )
}

export default Introduction;