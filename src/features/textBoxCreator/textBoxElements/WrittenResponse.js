import '../../../app/App.css';
//import { createComparisonSection, inputSimilarities, inputDifferences, submitComparisons  } from '../textBoxCreatorSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createWrittenResponseSection, inputWrittenResponse, submitWrittenResponses } from '../textBoxCreatorSlice';
import filterByExamBoard from './textBoxFunctions/filterByExamBoard';


const WrittenResponse = (props) => { 

    const dispatch = useDispatch();

    const examBoard = useSelector(state => state.examBoard.selectedExamBoard);
    
    const writtenResponses = useSelector(state => state.textBoxCreator.writtenResponses);

    //Defines index of object into which to input and log comparisons in comparison array of textBoxCreator section of state

    let indexOfResponseToUpdate = writtenResponses.findIndex((x) => {
        return x.id === props.id;
      }) 

    //generates an array of questions to render, filtering if necessary by examBoard

    const arrayOfQuestionsToRender = (props.children.filter === 'true') ? filterByExamBoard(props.children.questions, examBoard, true) : props.children.questions;

    //this generates the skeleton of an object to add to the writtenResponses section of the store

    const prepareStorageObject = () => {
        let newObject = {id: props.id, questions: {}};
        let newerObject = {id: props.id, questions: {}};
        arrayOfQuestionsToRender.forEach((questionDetails) => {
            newerObject.questions = {...newerObject.questions, [questionDetails.questionReference]: {id: questionDetails.id, input: "", logged: ""}};
        })
        
        return newerObject;
        
    }

    //sends the object skeleton for addition to the writtenResponses section of the store

    useEffect(() => {
        const objectToSend = prepareStorageObject();        
        dispatch(createWrittenResponseSection(objectToSend));        
    }, [])
    

    //this takes any text that has been inputted into the text boxes and files them in the input sections of the relevant object in the 
    //writtenResponse section of the store 

    const inputResponse = (event) => {        
        dispatch(inputWrittenResponse({index: indexOfResponseToUpdate, questionReference: event.target.id, inputtedText: event.target.value}))
        
    }

    //this handles the logic for the submit button, it transfers userInput from the 'input' to the 'logged' section of the relevant object
    //in the writtenResponse section of the store, which restores 'input' entry to null, which empties the text boxes on the screen (via their 
    //'value' props)

    const submitWrittenResponse = () => {       
       dispatch(submitWrittenResponses({index: indexOfResponseToUpdate}));
       arrayOfQuestionsToRender.forEach((question) => {
        return dispatch(inputWrittenResponse({index: indexOfResponseToUpdate, questionReference: question.questionReference, inputtedText: ""}))
       })
    }

let keyCount = 1;

return (
    <div style={{width: "100%"}} className="mt-2">
        <h3>Written response</h3>
        <p>Enter your answers in the textboxes below each question.</p>
        
        {/*Renders questions with empty text boxes below */}

         {arrayOfQuestionsToRender.map((questionDetails) => (
            <div key={keyCount = keyCount + 1}>
            <p>{questionDetails.questionText}</p>
            <p><textarea value={(indexOfResponseToUpdate === -1) ? '' : writtenResponses[indexOfResponseToUpdate].questions[questionDetails.questionReference].input} onChange={inputResponse}  style={{width: "100%"}} type="text" name="TB1-similarities" id={questionDetails.questionReference}></textarea></p>
            </div>
         ))}

        {/*Renders submit button */}

        <ul className="list-group list-group-horizontal mt-3 fs-5 d-flex justify-content-center">
                    <div className="excess-or-reset-button-container d-flex justify-content-center">
                      <button 
                       className="excess-button list-group-item w-100 rounded" 
                       type="submit" 
                       id="submitResponse"
                       onClick={submitWrittenResponse}                   
                      >Submit response</button> 
                    </div>
                  </ul>
    </div>
)

}

export default WrittenResponse;