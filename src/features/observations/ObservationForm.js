import { useSelector, useDispatch } from 'react-redux';
import { inputInitialObservation, inputFinalObservation, logInitialObservation, logFinalObservation } from './observationFormSlice';
//import { inputInitialObservation2, inputFinalObservation2, logInitialObservation2, logFinalObservation2, selectReactantsToObserve3 } from './observationFormSlice';
import '../../app/App.css';
import { useEffect } from 'react';
import { incrementObservationStage } from '../../features/rowOfTestTubes/rowOfTestTubesSlice';

const ObservationForm = (props) => {
    

    console.log(`observation forms props...`);
    console.log(props);
const dispatch = useDispatch();
 
const metal = props.props.metal;

const metalObservations = useSelector(state => state.observationForm.reactantsToObserve[metal.metal]);
//console.log(metalObservations.observationStage);
const observationStage = useSelector(state => state.rowOfTubes.unreactedMetals2[metal.metal].observationStage);
//console.log(metalObservations2);

//const metalObservations3 = useSelector(state => state.observationForm.reactantsToObserve3[metal.metal]);
//console.log(metalObservations3.observationStage);

//const observationStage = () => { metalObservations ? return metalObservations.observationstage : return 1};
//console.log(observationStage);

//const observationStage2 = metalObservations.observationStage;

//console.log(metalObservations.observationStage);
/*
const observations = {
    observationStage: 1,
    initial:
    {input: {}, logged: {}},
    final:
    {input: {}, logged: {}}
  }

useEffect(() => {
    console.log(metal.metal);
dispatch(selectReactantsToObserve3({metal: metal.metal, observations: observations}))
}, [metal.metal])
*/
/*
const observationStage = () => {
    if (!metalObservations){      
        return 1;
    } else {       
        return metalObservations.observationStage;
    }
}
/**/

    const initialObservationToState = (event) => {        
        console.log(event.target.value);
        dispatch(inputInitialObservation({metal: metal.metal, observation: event.target.value}));

    }

    const finalObservationToState = (event) => {
        dispatch(inputFinalObservation({metal: metal.metal, observation: event.target.value}));
    }


    const submitObservation = (event) => {
        event.preventDefault();       
        
        if (observationStage === 1){
            dispatch(logInitialObservation({metal: metal.metal, observation: metalObservations.initial.input, observationStage: observationStage + 1}));
            dispatch(incrementObservationStage({metal: metal.metal, newObservationStage: observationStage + 1}));
            return;


        } else if (observationStage === 2){
            //console.log(observationStage + 1);
            dispatch(logFinalObservation({metal: metal.metal, observation: metalObservations.final.input, observationStage: observationStage + 1}));                
            dispatch(incrementObservationStage({metal: metal.metal, newObservationStage: observationStage + 1}));
            return;
        }

    }


    return (
        <div className="form-check translate-middle-x">
            <form>              

               {/*Submit initial observation */}                              
                
               {(observationStage === 1) ?
                
               <div>
                <label>
                    First observation
                </label>
                
                <input type="text"   onChange={initialObservationToState} id={`flexCheck${props.props.metal.id}-initial`}/>
                </div>
                : null }


            {/*Submit a text box reading "click test tube" */}
            {/*Might need to add some logic to the individual tube clicking sitch where clicking the test tube adds 1 to the observation stage */}
            {/*Submit second observation */}
            {/*might need to change that to 3 so the click test tube label can go with OS2 */}
            {(observationStage === 2) ? 
            
                <div>
                <label>
                    Second observation
                </label>
                <input type="text"  onChange={finalObservationToState} id={`flexCheck${props.props.metal.id}-final`}/>
                </div>      
                : null }  

             {/*submit button */}
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
                </form>
            <p>Hello!</p>
        </div>
    )
}

export default ObservationForm;

