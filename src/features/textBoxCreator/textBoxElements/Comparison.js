import '../../../app/App.css';
import { createComparisonSection, inputSimilarities, inputDifferences, submitComparisons  } from '../textBoxCreatorSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


const Comparison = (props) => {    

    const dispatch = useDispatch();
    
    const comparisonInputs = useSelector(state => state.textBoxCreator.comparison);

    //Defines index of object into which to input and log comparisons in comparison array of textBoxCreator section of state

    let indexOfComparisonToUpdate = comparisonInputs.findIndex((x) => {
        return x.id === props.id;
      }) 


    //Adds an object in which to input and log comparisons to comparison array of textBoxCreator section of state

    useEffect(() => {
        dispatch(createComparisonSection({id: props.id}));        
    }, [])
    

    const similaritiesToState = (event) => {        
        dispatch(inputSimilarities({index: indexOfComparisonToUpdate, content: event.target.value}));
    }

    const differencesToState = (event) => {        
        dispatch(inputDifferences({index: indexOfComparisonToUpdate, content: event.target.value}));
    }    

    const submitComparison = () => {       
        dispatch(submitComparisons({index: indexOfComparisonToUpdate, id: props.id}));       
        dispatch(inputSimilarities({index: indexOfComparisonToUpdate, content: ""}));
        dispatch(inputDifferences({index: indexOfComparisonToUpdate, content: ""}));
    }

return (
    <div style={{width: "100%"}} className="mt-2">
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
        <ul className="list-group list-group-horizontal mt-3 fs-5 d-flex justify-content-center">
                    <div className="excess-or-reset-button-container d-flex justify-content-center">
                      <button 
                       className="excess-button list-group-item w-100 rounded" 
                       type="submit" 
                       id="submitObservation"
                       onClick={submitComparison}                   
                      >Submit comparison</button> 
                    </div>
                  </ul>
    </div>
)

}

export default Comparison;