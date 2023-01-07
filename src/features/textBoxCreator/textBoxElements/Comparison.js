import '../../../app/App.css';
import { inputSimilarities, inputDifferences, submitComparisons, createComparisonSection } from '../textBoxCreatorSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
//import { React }

const Comparison = () => {

    const dispatch = useDispatch();
    const comparisonInputs = useSelector(state => state.textBoxCreator.comparison);

    const comparisonLog = {
        similarities: {
          input: "",
          logged: ""
        },
        differences: {
          input: "",
          logged: ""
        }
    }
    /*

    This will serve a useful purpose but not yet

    useEffect(() => {
        dispatch(createComparisonSection(comparisonLog))
    }, [])
    */
    const similaritiesToState = (event) => {        
        dispatch(inputSimilarities(event.target.value));
    }

    const differencesToState = (event) => {        
        dispatch(inputDifferences(event.target.value));
    }

    const submitComparison = () => {
        dispatch(submitComparisons(comparisonInputs))

    }

return (
    <div style={{width: "100%"}} className="mt-2">
        <div className="row">
                    <div className="col-md-6 ">
                        <p>Similarities</p>
                        <p><textarea onChange={similaritiesToState}  style={{width: "100%"}} type="text" name="TB1-similarities" id="TB1-similarities"></textarea></p>
                    </div>
                    <div className="col-md-6">
                        <p>Differences</p>
                        <p><textarea onChange={differencesToState} style={{width: "100%"}} type="text" name="TB1-differences" id="TB1-differences"></textarea></p>
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

//similarities
//differences
//id={`flexCheck${props.metal.id}-initial`}