//import { MCQData } from '../../../../textDataTemp';
import { MCQData } from '../../../../../src/data/transitionMetalData/mcqData';
import filterByExamBoard from "../textBoxFunctions/filterByExamBoard";
import '../../../../app/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnswer, displayFeedback, selectMCQId, reset } from './multipleChoiceQuestionSlice';
import optionTextGenerator from './optionTextGenerator';
//import filterByExamBoard from '../textBoxFunctions/filterByExamBoard';
import formatSubSuperScript from '../textBoxFunctions/formatSubSuperScript';


const MultipleChoiceQuestion = (props) => {

    //redux config
    const dispatch = useDispatch();

    //define constants to refer to items in state
    const selectedAnswer = useSelector(state => state.multipleChoiceQuestion.selectedAnswer);
    const feedback = useSelector(state => state.multipleChoiceQuestion.displayedFeedback);
    const examBoard = useSelector(state => state.examBoard.selectedExamBoard);
    

    //harvest Id number of multiple choice question (MCQ) from props
    const MCQId = props.children.id;
    
    //define constant for MCQ entry in data file, including question text, options, formatting, feedback comments and which correct
    const MCQAllDetails = MCQData.find((entry) => entry.id === MCQId);

    //define constant for the options *only* from the above constant, filtered by examboard
    //console.log(MCQAllDetails);
    //const MCQAllDetailsFiltered = filterByExamBoard(MCQAllDetails.options, examBoard, true);
    
    const MCQAllDetailsFiltered = (MCQAllDetails.filter === 'true') ? filterByExamBoard(MCQAllDetails.options, examBoard, true) : MCQAllDetails.options;

    //console.log(MCQAllDetailsFiltered2);
    //when radio button clicked, selected answer dispatched to state
    const onValueChange = (event) => {
      //console.log(event.target.value);
        dispatch(selectAnswer(event.target.value));
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
    }


    //resets question 

    const handleReset = () => {
      
      //resets MCQ section of state to initial values
      dispatch(reset());

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
           <p className="lead">{MCQAllDetails.question}</p>
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
                    <input name='option' className="form-check-input" type="radio" value={option.id} onChange={onValueChange} id={`flexCheck${option.optionNumber}`} />
                    
                      {optionTextGenerator(option, MCQAllDetails.columns, option.id)}
                    
                  </div>
                ))}
                <p className="lead mt-3 pt-2 border-top border-3" style={{margin: '10px 0px'}}>{feedback ? formatSubSuperScript(feedback.comment) : 'Select an option and then press "Check Answer"'}</p> 
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
