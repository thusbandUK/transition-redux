import { MCQData } from '../../../../textDataTemp';
import '../../../../app/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnswer, displayFeedback, selectMCQId, reset } from './multipleChoiceQuestionSlice';
import optionTextGenerator from './optionTextGenerator';


const MultipleChoiceQuestion = (props) => {

    //redux config
    const dispatch = useDispatch();

    //define constants to refer to items in state
    const selectedAnswer = useSelector(state => state.multipleChoiceQuestion.selectedAnswer);
    const feedback = useSelector(state => state.multipleChoiceQuestion.displayedFeedback);

    //harvest Id number of multiple choice question (MCQ) from props
    const MCQId = props.children.id;
    
    //define constant for MCQ entry in data file, including question text, options, formatting, feedback comments and which correct
    const MCQAllDetails = MCQData.find((entry) => entry.id === MCQId);


    //when radio button clicked, selected answer dispatched to state
    const onValueChange = (event) => {
        dispatch(selectAnswer(event.target.value));
    }

    //checks selected answer against multiple choice data

    const formSubmit = (event) => {        
        event.preventDefault();

        //compiles feedback data for dispatch to state
        
        let feedbackData = {}; 
        MCQAllDetails.options.forEach((response) => {
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
            className="mt-2 pt-2 border-top border-3"
            style={{borderColor: 'red !important'}}
            >
            {/**findQuestion(MCQId) MCQAllDetails*/}
            {MCQAllDetails.options.map((option) => (
                  <div 
                  className="form-check"
                  key={option.key}
                  
                  >
                    <input name='option' className="form-check-input" type="radio" value={option.id} onChange={onValueChange} id={`flexCheck${option.optionNumber}`} />
                    
                      {optionTextGenerator(option, MCQAllDetails.columns, option.id)}
                    
                  </div>
                ))}
                <p className="lead mt-1 pt-2 border-top border-3" >{feedback ? feedback.comment : 'Select an option and then press "Check Answer"'}</p> 
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
