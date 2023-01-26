import { MCQData } from '../../../../../src/data/transitionMetalData/mcqData';
import filterByExamBoard from "../textBoxFunctions/filterByExamBoard";
import '../../../../app/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createMCQObject, selectAnswer, displayFeedback, reset } from './multipleChoiceQuestionSlice';
import optionTextGenerator from './optionTextGenerator';
import formatSubSuperScript from '../textBoxFunctions/formatSubSuperScript';


const MultipleChoiceQuestion = (props) => {

  //console.log(props.children.id);

    //redux config
    const dispatch = useDispatch();

    //define constants to refer to items in state    
    
    const feedback = useSelector(state => state.multipleChoiceQuestion.MCQAnswers);
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
      
        //dispatch(selectAnswer(event.target.value));
        dispatch(selectAnswer({index: indexOfMCQToUpdate, answer: event.target.value}));        
    }
   
    //checks selected answer against multiple choice data

    const formSubmit = (event) => {        
        event.preventDefault();

        //compiles feedback data for dispatch to state
        
        let feedbackData = {}; 
        
          MCQAllDetailsFiltered.forEach((response) => {
           if (response.id === Number(feedback[indexOfMCQToUpdate].selectedAnswer)){
                   
            return feedbackData = {comment: response.feedback};
          }          

        })
        
        //dispatches feedback data
        
        dispatch(displayFeedback({index: indexOfMCQToUpdate, answerDetails: {...feedbackData, correct: MCQAllDetails.correct}}));
    }


    //resets question 

    const handleReset = () => {
      
      //resets MCQ section of state to initial values
      
      dispatch(reset({index: indexOfMCQToUpdate, MCQId: MCQId}));

      //finds and unchecks the checked radio button
      var ele = document.getElementsByName('option');
              
            for(let i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                {
                  ele[i].checked = false;
                }                
              }
             
    }
   //the three below functions protect against crashing because items have been written to the store yet

   //This provides logic to selectively render the "submit" or "try again" buttons

  const renderButton = () => {
    if ((indexOfMCQToUpdate === -1) || (!feedback[indexOfMCQToUpdate].selectedAnswer) || (!feedback[indexOfMCQToUpdate].displayedFeedback)){
      return true;
    } else {
      return false;
    }
  }

  //This disables the submit button until an answer has been selected

  const disableButton = () => {
    if ((indexOfMCQToUpdate === -1) || (!feedback[indexOfMCQToUpdate].selectedAnswer)){      
      return true;
    } else return false;

  }

  //this provides logic to render "select an option..." until an answer is submitted and then provides the corresponding feedback
  const renderText = () => {
    const noFeedback = 'Select an option and then press "Check Answer"';
    if ((indexOfMCQToUpdate === -1) || (!feedback[indexOfMCQToUpdate].selectedAnswer) || (!feedback[indexOfMCQToUpdate].displayedFeedback)){
      return noFeedback;
    } else return formatSubSuperScript(feedback[indexOfMCQToUpdate].displayedFeedback.comment)

  }



    return (
        <div>
           <h2>Check your understanding!</h2>

           {/*Below renders multiple choice question */}

           <div className="lead">{formatSubSuperScript(MCQAllDetails.question)}</div>
            <form
            onSubmit={formSubmit}
            className="mt-3 pt-2 border-top border-3"
            style={{borderColor: 'red !important', margin: '10px 0px'}}
            >
            {/*Below renders the multiple choice question potential answers*/}

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

                {/*Below renders feedback when selected answer submitted */}
               
                <div className="lead mt-3 pt-2 border-top border-3" style={{margin: '10px 0px'}}>{renderText()}</div>                
                
                {/*Below selectively renders and styles "submit" and "try again" buttons */}

                <ul className="list-group list-group-horizontal mt-3 fs-5 d-flex justify-content-center">
                <div className="excess-or-reset-button-container d-flex justify-content-center">
                  
                  {renderButton() ? 
                  
                   <button 
                   className="excess-button list-group-item w-100 rounded" 
                   type="submit" 
                   id="checkAnswerButton"
                   onClick={formSubmit}                   
                   disabled={disableButton()}
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