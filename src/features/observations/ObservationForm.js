import { useSelector, useDispatch } from 'react-redux';
import { inputInitialObservation, inputFinalObservation, logInitialObservation, logFinalObservation } from './observationFormSlice';
import '../../app/App.css';
import { incrementObservationStage } from '../../features/rowOfTestTubes/rowOfTestTubesSlice';

const ObservationForm = (props) => {
    
    const dispatch = useDispatch();
 
    const metal = props.props.metal;

    const metalObservations = useSelector(state => state.observationForm.reactantsToObserve[metal.metal]);

    const observationStage = useSelector(state => state.rowOfTubes.unreactedMetals[metal.metal].observationStage);


    const initialObservationToState = (event) => {        
        //console.log(observationStage/2);
        dispatch(inputInitialObservation({metal: metal.metal, observationNumber: ((observationStage/2).toString()), observation: event.target.value}));

    }

    const finalObservationToState = (event) => {
        dispatch(inputFinalObservation({metal: metal.metal, observation: event.target.value}));
    }


    const submitObservation = (event) => {
        event.preventDefault();       
        
        dispatch(logInitialObservation({metal: metal.metal, observationNumber: ((observationStage/2).toString()), observation: metalObservations[(observationStage/2).toString()].input}));
        dispatch(incrementObservationStage({metal: metal.metal, newObservationStage: observationStage + 1}));
        return;
/*
        if (observationStage === 2){
            //console.log('OS = 1');
           // console.log(metalObservations[observationStage.toString()].input);
            dispatch(logInitialObservation({metal: metal.metal, observation: metalObservations[(observationStage/2).toString()].input}));
            dispatch(incrementObservationStage({metal: metal.metal, newObservationStage: observationStage + 1}));
            return;

        } else if (observationStage === 3){            
            dispatch(logFinalObservation({metal: metal.metal, observation: metalObservations.final.input}));                
            dispatch(incrementObservationStage({metal: metal.metal, newObservationStage: observationStage + 1}));
            return;
        }
*/
    }


    return (
        <div className="form-check translate-middle-x">
            <form>              

               {/*Submit initial observation */}                              
                
               {(observationStage % 2 === 0) ?
                
               <div>
                <label style={{display: 'inline'}}>
                    {`Observation ${observationStage/2}`}
                </label>
                
                <input type="text"   onChange={initialObservationToState} id={`flexCheck${props.props.metal.id}-initial`}/>
                <ul className="list-group list-group-horizontal mt-3 fs-5 d-flex justify-content-center">
                <div className="excess-or-reset-button-container d-flex justify-content-center">
                  <button 
                   className="excess-button list-group-item w-100 rounded" 
                   type="submit" 
                   id="submitObservation"
                   onClick={submitObservation}
                   
                   >Submit observation</button> 
                </div>
                </ul>
                </div>
                : null }




               {(observationStage === 3) ?
                
                <div>
                 <p>Click test tube</p>
                 </div>
                 : null }

            {/*Submit a text box reading "click test tube" */}
            {/*Might need to add some logic to the individual tube clicking sitch where clicking the test tube adds 1 to the observation stage */}
            {/*Submit second observation */}
            {/*might need to change that to 3 so the click test tube label can go with OS2 */}
           {/* {(observationStage === 4) ? 
            
                <div>
                <label>
                {`Observation ${observationStage/2}`}
                </label>
                <input type="text"  onChange={initialObservationToState} id={`flexCheck${props.props.metal.id}-final`}/>
                </div>      
                : null }  */}

             {/*submit button 
             <ul className="list-group list-group-horizontal mt-3 fs-5 d-flex justify-content-center">
                <div className="excess-or-reset-button-container d-flex justify-content-center">
                  <button 
                   className="excess-button list-group-item w-100 rounded" 
                   type="submit" 
                   id="submitObservation"
                   onClick={submitObservation}
                   
                   >Submit observation</button> 
                </div>
                </ul>*/}
                </form>
            
        </div>
    )
}

export default ObservationForm;

