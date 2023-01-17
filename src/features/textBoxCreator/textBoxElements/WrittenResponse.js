import '../../../app/App.css';
//import { createComparisonSection, inputSimilarities, inputDifferences, submitComparisons  } from '../textBoxCreatorSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createWrittenResponseSection, inputWrittenResponse, submitWrittenResponses } from '../textBoxCreatorSlice';


const WrittenResponse = (props) => {    

    const dispatch = useDispatch();
    
    const writtenResponses = useSelector(state => state.textBoxCreator.writtenResponses);

    //Defines index of object into which to input and log comparisons in comparison array of textBoxCreator section of state

    let indexOfResponseToUpdate = writtenResponses.findIndex((x) => {
        return x.id === props.id;
      }) 

    //console.log(props.children);

    const arrayOfQuestionsToRender = props.children.questions;

    const prepareStorageObject = () => {
        let newObject = {id: props.id};
        arrayOfQuestionsToRender.forEach((questionDetails) => {
            newObject = {...newObject, [questionDetails.questionReference]: {input: "", logged: ""}};
        })
        console.log(newObject);
        return newObject;
        //setOfReactants.reduce((accumulator, currentValue) => ({...accumulator, [currentValue.metal]: (({id, link, altText, opaque}) => ({id, link, altText, opaque}))(currentValue)}), {});
    }

    //prepareStorageObject();
    //Adds an object in which to input and log comparisons to comparison array of textBoxCreator section of state

    /**
     * seems like it would be good to give yourself the versatility to render whatever's there, so let's say there's an array
     * of question objects, each of which has a question reference, the question itself
     * so you'd map the array and use it to make an object and all of that would be sent via the action payload and slotted into the state array
     */

    useEffect(() => {
        const objectToSend = prepareStorageObject();        
        dispatch(createWrittenResponseSection(objectToSend));        
    }, [])
    

    const inputResponse = (event) => {        
        //dispatch(inputSimilarities({index: indexOfComparisonToUpdate, content: event.target.value}));
        //state.writtenResponses[action.payload.index][action.payload.questionReference].input = action.payload.inputtedText;
        //console.log(event.target.id);
        dispatch(inputWrittenResponse({index: indexOfResponseToUpdate, questionReference: event.target.id, inputtedText: event.target.value}))
        
    }
/*
    const differencesToState = (event) => {        
        //dispatch(inputDifferences({index: indexOfComparisonToUpdate, content: event.target.value}));
    }    */

    const submitWrittenResponse = () => {       
       // dispatch(submitComparisons({index: indexOfComparisonToUpdate, id: props.id}));       
       // dispatch(inputSimilarities({index: indexOfComparisonToUpdate, content: ""}));
       // dispatch(inputDifferences({index: indexOfComparisonToUpdate, content: ""}));
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
        {/**
        <div className="row">
                    <div className="col-md-6 ">
                        <p>Similarities</p>
                        <p><textarea value={(indexOfComparisonToUpdate === -1) ? '' : comparisonInputs[indexOfComparisonToUpdate].similarities.input} onChange={similaritiesToState}  style={{width: "100%"}} type="text" name="TB1-similarities" id="TB1Similarities"></textarea></p>
                    </div>
                    <div className="col-md-6">
                        <p>Differences</p>
                        <p><textarea value={(indexOfComparisonToUpdate === -1) ? '' : comparisonInputs[indexOfComparisonToUpdate].differences.input} onChange={differencesToState} style={{width: "100%"}} type="text" name="TB1-differences" id="TB1Differences"></textarea></p>
                    </div>
        </div>
         */}
         {arrayOfQuestionsToRender.map((questionDetails) => (
            <div key={keyCount = keyCount + 1}>
            <p>{questionDetails.questionText}</p>
            <p><textarea value={(indexOfResponseToUpdate === -1) ? '' : writtenResponses[indexOfResponseToUpdate][questionDetails.questionReference].input} onChange={inputResponse}  style={{width: "100%"}} type="text" name="TB1-similarities" id={questionDetails.questionReference}></textarea></p>
            </div>
         ))}
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