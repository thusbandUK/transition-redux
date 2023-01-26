import { MCQData } from '../../../../../src/data/transitionMetalData/mcqData';
import filterByExamBoard from "../textBoxFunctions/filterByExamBoard";
import '../../../../app/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createMCQObject, selectAnswer, displayFeedback, reset, selectAnswer2, displayFeedback2, reset2 } from './multipleChoiceQuestionSlice';
import optionTextGenerator from './optionTextGenerator';
import formatSubSuperScript from '../textBoxFunctions/formatSubSuperScript';


const MultipleChoiceQuestion = (props) => {

  //console.log(props.children.id);

    //redux config
    const dispatch = useDispatch();

    //define constants to refer to items in state
    const selectedAnswer = useSelector(state => state.multipleChoiceQuestion.selectedAnswer);
    const feedback = useSelector(state => state.multipleChoiceQuestion.displayedFeedback);
    const feedback2 = useSelector(state => state.multipleChoiceQuestion.MCQAnswers);
    const examBoard = useSelector(state => state.examBoard.selectedExamBoard);
    const MCQAnswersInStore = useSelector(state => state.multipleChoiceQuestion.MCQAnswers);
    
    
    //harvest Id number of multiple choice question (MCQ) from props
    const MCQId = props.children.id;

    //Scans store to find index of object linked to the multiple choice question currently being answered

    let indexOfMCQToUpdate = MCQAnswersInStore.findIndex((x) => {
      return x.id === MCQId;
    }) 

    //creates and dispatches an object in which to store data for individual multiple choice questions
    useEffect(() => {
      dispatch(createMCQObject({id: props.children.id}));        
  }, [])
    
    //define constant for MCQ entry in data file, including question text, options, formatting, feedback comments and which correct
    const MCQAllDetails = MCQData.find((entry) => entry.id === MCQId);

    //define constant for the options *only* from the above constant, filtered by examboard
        
    const MCQAllDetailsFiltered = (MCQAllDetails.filter === 'true') ? filterByExamBoard(MCQAllDetails.options, examBoard, true) : MCQAllDetails.options;

    
    //when radio button clicked, selected answer dispatched to state
    const onValueChange = (event) => {
      
        dispatch(selectAnswer(event.target.value));
        dispatch(selectAnswer2({index: indexOfMCQToUpdate, answer: event.target.value}));
    }

    //checks selected answer against multiple choice data

    const formSubmit = (event) => {        
        event.preventDefault();

        //compiles feedback data for dispatch to state
        
        let feedbackData = {}; 
        //MCQAllDetails.options.forEach((response) => {
          MCQAllDetailsFiltered.forEach((response) => {
          if (response.id === Number(selectedAnswer)){            
            return feedbackData = {comment: response.feedback};
          }          

        })
        
        //dispatches feedback data

        dispatch(displayFeedback({...feedbackData, correct: MCQAllDetails.correct}));
        dispatch(displayFeedback2({index: indexOfMCQToUpdate, answerDetails: {...feedbackData, correct: MCQAllDetails.correct}}));
    }


    //resets question 

    const handleReset = () => {
      
      //resets MCQ section of state to initial values
      dispatch(reset());
      dispatch(reset2({index: indexOfMCQToUpdate, MCQId: MCQId}));

      //finds and unchecks the checked radio button
      var ele = document.getElementsByName('option');
              
            for(let i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                {
                  ele[i].checked = false;
                }                
              }
             
    }
   

    return (
        <div>
           <h2>Check your understanding!</h2>
           <div className="lead">{formatSubSuperScript(MCQAllDetails.question)}</div>
            <form
            onSubmit={formSubmit}
            className="mt-3 pt-2 border-top border-3"
            style={{borderColor: 'red !important', margin: '10px 0px'}}
            >
            {/**findQuestion(MCQId) MCQAllDetails
            {MCQAllDetails.options.map((option) => (*/}

             {MCQAllDetailsFiltered.map((option) => (
                  <div 
                  className="form-check mt-2"
                  key={option.id}
                  
                  >
                    <input name='option' 
                    style={option.hideCheckbox ? {display: 'none'} : {display: 'block'}}
                    className="form-check-input" type="radio" value={option.id} onChange={onValueChange} id={`flexCheck${option.optionNumber}`} />
                    
                      {optionTextGenerator(option, MCQAllDetails.columns, option.id)}
                    
                  </div>
                ))}

                {/*Hopefully this won't affect anything. Ele dir below *was* <p> but then console started error warning, p can't be
                child of p, so changed to <div> and seems okay. Weird it suddenly started doing that */}



                <div className="lead mt-3 pt-2 border-top border-3" style={{margin: '10px 0px'}}>{feedback ? formatSubSuperScript(feedback.comment) : 'Select an option and then press "Check Answer"'}</div> 
                <ul className="list-group list-group-horizontal mt-3 fs-5 d-flex justify-content-center">
                <div className="excess-or-reset-button-container d-flex justify-content-center">
                  { !feedback ?
                  
                   <button 
                   className="excess-button list-group-item w-100 rounded" 
                   type="submit" 
                   id="checkAnswerButton"
                   onClick={formSubmit}
                   disabled={!selectedAnswer}
                   >Check answer</button> 
                   :
                   <button 
                   className="excess-button list-group-item w-100 rounded" 
                   type="submit" 
                   onClick={handleReset}
                   
                   >Try again</button>
                  }
                </div>
                </ul>
                
            </form>
        </div>
    )

}

export default MultipleChoiceQuestion;

//{ !feedback2[indexOfMCQToUpdate].displayedFeedback ?
