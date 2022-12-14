import { MCQData } from '../../../textDataTemp';
import formatSubSuperScript from './textBoxFunctions/formatSubSuperScript';
import { createElement, Fragment } from 'react';
import '../../../app/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnswer, displayFeedback, selectMCQId, reset } from './multipleChoiceQuestionSlice';
import optionTextGenerator from './multipleChoiceQuestions/optionTextGenerator';


const MultipleChoiceQuestion = () => {

    const dispatch = useDispatch();
    const selectedAnswer = useSelector(state => state.multipleChoiceQuestion.selectedAnswer);
    const MCQId = useSelector(state => state.multipleChoiceQuestion.MCQId);
    const feedback = useSelector(state => state.multipleChoiceQuestion.displayedFeedback);

    //dispatches selected question to state upon radio click

    const onValueChange = (event) => {
        dispatch(selectAnswer(event.target.value));

    }

    //checks selected answer against multiple choice data


    const formSubmit = (event) => {
        //dispatch(displayFeedback(feedbackData));
       // dispatch(selectMCQId(42));
        event.preventDefault();
        //console.log(event.target.value)
        //const correctAnswerId = 
        const MCQ = MCQData.filter((MCQEntry) => {
            return MCQEntry.id = Number(MCQId);
      })
        let feedbackData = {}; 
        MCQ[1].options.forEach((response) => {
          if (response.id === Number(selectedAnswer)){
            //alert(response.optionNumber);
            return feedbackData = {comment: response.feedback};
          }
          //return response.id === Number(selectedAnswer);

        })
        

        dispatch(displayFeedback({...feedbackData, correct: MCQ[1].correct}));
    }

    const handleReset = () => {
      
      dispatch(reset());
      var ele = document.getElementsByName('option');
              
            for(let i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                {
                  ele[i].checked = false;
                }                
              }
             
    }

    const handleFeedback = () => {
      //alert(feedback);
//console.log(feedback);
      if (!feedback.displayedFeedback){
        //console.log('hello!');
        return 'Select an option and then press "Check Answer"';
      }
      if (feedback.displayedFeedback){
        if (feedback.id === feedback.correct.id){
          return `Correct! ${feedback.dispalyedFeedback}`;
        } else if (feedback.id !== feedback.correct.id){
          return `Incorrect! ${feedback.dispalyedFeedback}`;
        }
      }
      /*
      switch(feedback.displayedFeedback){
        
        case !feedback.displayedFeedback:
          alert('case 1');
          return 'Select an option and then press "Check Answer"';
          break;
        case (feedback.id === feedback.correct.id):
          alert('case 2');
          return `Correct! ${feedback.dispalyedFeedback}`;
          break;
        case (feedback.id !== feedback.correct.id):
          alert('case 3');
          return `Incorrect! ${feedback.dispalyedFeedback}`
          break;
      }
      */
      
    }

    return (
        <div>
           
            <form
            onSubmit={formSubmit}
            >
            
            {MCQData[1].options.map((option) => (
                  <div 
                  className="form-check"
                  key={option.id}
                  
                  >
                    <input name='option' className="form-check-input" type="radio" value={option.id} onChange={onValueChange} id={`flexCheck${option.optionNumber}`} />
                    
                      {optionTextGenerator(option, MCQData[1].columns)}
                      
                      
                      
                      
                      
                      
                    
                  </div>
                ))}
                <ul className="list-group list-group-horizontal mt-5 fs-5 d-flex justify-content-center">
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
                {feedback ? <p>{feedback.comment}</p> : 'Select an option and then press "Check Answer"'}
                
                
            </form>
           



{/**
 * {feedback ? <p>{feedback.feedback}</p> : 'Select an option and then press "Check Answer"'}
 * {handleFeedback}
 * {feedback ? handleFeedback : 'hmm!'}
 * <label className="form-check-label" htmlFor={`flexCheck${option.optionNumber}`} >
                      {optionTextGenerator(option, MCQData[1].columns)}
                      
                      </label>
 * 
 * {formatSubSuperScript(option.optionText)}
 * 
                <form>
                <div onChange={onChangeValue}>
               {MCQData[0].options.map((option) => (
                <div
                  className="form-check"
                  key={option.id}
                  onChange={onChangeValue}
                  >
                    <input type="radio" value={option.id} name="option" /> {formatSubSuperScript(option.optionText)}
                    </div>

))}
            
                </div>

             <div className="col-12">
              <button className="btn btn-primary" type="submit" onClick={handleClick}>Check answer</button>
            </div>
            </form>
            <div onChange={onChangeValue}>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
             */}
        </div>
    )

}

export default MultipleChoiceQuestion;

/*
{formatSubSuperScript(option.optionText)}
 {/**
            <div class="form-check">
              <input name='option' class="form-check-input" type="radio" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
            </div>
            <div class="form-check">
              <input name='option' class="form-check-input" type="radio" value="" id="flexCheckChecked" />
              <label class="form-check-label" for="flexCheckChecked">
                Checked checkbox
              </label>
            </div>
            <div class="form-check">
              <input name='option' class="form-check-input" type="radio" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
            </div>
            <div class="form-check">
              <input name='option' class="form-check-input" type="radio" value="" id="flexCheckChecked" />
              <label class="form-check-label" for="flexCheckChecked">
                Checked checkbox
              </label>
            </div>
            <div>
              <select class="form-select" size="3" aria-label="size 3 select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <form>
            <input class="form-control" type="text" value="A" aria-label="readonly input example" readonly></input>
            <input class="form-control" type="text" value="B" aria-label="readonly input example" readonly></input>
            <input class="form-control" type="text" value="C" aria-label="readonly input example" readonly></input>
            <input class="form-control" type="text" value="D" aria-label="readonly input example" readonly></input>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
            </form>
            <i className="icon">{iconEntity}</i>
                <p>&#8594;</p>
                <p>&#hexString;</p>
                <p>{decodeURI('&#8594;')}</p>
 */ 