import { MCQData } from '../../../textDataTemp';
import formatSubSuperScript from './textBoxFunctions/formatSubSuperScript';
import { Fragment } from 'react';
import '../../../app/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnswer, displayFeedback, selectMCQId } from './multipleChoiceQuestionSlice';


const MultipleChoiceQuestion = () => {

    const dispatch = useDispatch();
    const selectedAnswer = useSelector(state => state.multipleChoiceQuestion.selectedAnswer);
    const MCQId = useSelector(state => state.multipleChoiceQuestion.MCQId);
    const feedback = useSelector(state => state.multipleChoiceQuestion.displayedFeedback);

    //const hexString = &#8594;

//separate out the sub super formatting logic from the element generation logic (or you could have a third parameter with
//if logic that adds additional functionality, yes, this)
/*
you make right arrow and reversible arrow component functions that literally just render one thing, an arrow, display: inline
and you code the additional functionality to render accordingly
*/


    //const iconEntity = <Fragment>{hexString}</Fragment>
/*
    const handleClick = (event) => {
        alert(event.target.value ? event.target.value : 'think its null mate');

    }

    const onChangeValue = (event) => {
        console.log(event.target.value);
    }
*/
    const onValueChange = (event) => {
        dispatch(selectAnswer(event.target.value));

    }

    const formSubmit = (event) => {
        //dispatch(displayFeedback(feedbackData));
        dispatch(selectMCQId(43));
        event.preventDefault();
        //console.log(event.target.value)
        const MCQ = MCQData.filter((MCQEntry) => {
            return MCQEntry.id = Number(MCQId);
      })
      
        const feedbackData = MCQ[0].options.filter((response) => {
            //alert(typeof(selectedAnswer));
            return response.id === Number(selectedAnswer);
        })
        dispatch(displayFeedback(feedbackData));
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
                      <label className="form-check-label" htmlFor={`flexCheck${option.optionNumber}`} >
                      {formatSubSuperScript(option.optionText)}
                      </label>
                    
                  </div>
                ))}
                <div className="col-12">
                   <button className="btn btn-primary" type="submit" onClick={formSubmit}>Check answer</button>
                </div>
                {feedback ? <p>{feedback[0].feedback}</p> : 'Select an option and then press "Check Answer"'}
            </form>
           



{/**
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