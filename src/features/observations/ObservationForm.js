import { useSelector, useDispatch } from 'react-redux';
import { inputInitialObservation, inputFinalObservation, logInitialObservation, logFinalObservation } from './observationFormSlice';
import '../../app/App.css';

const ObservationForm = (props) => {
    
const dispatch = useDispatch();
 
const metal = props.props.metal;

const metalObservations = useSelector(state => state.observationFormSlice.reactantsToObserve[metal.metal]);

const observationStage = () => {
    if (!metalObservations){      
        return 1;
    } else {       
        return metalObservations.observationStage;
    }
}


    const initialObservationToState = (event) => {        
        dispatch(inputInitialObservation({metal: metal.metal, observation: event.target.value}));

    }

    const finalObservationToState = (event) => {
        dispatch(inputFinalObservation({metal: metal.metal, observation: event.target.value}));
    }


    const submitObservation = (event) => {
        event.preventDefault();       
        
        if (observationStage() === 1){
            dispatch(logInitialObservation({metal: metal.metal, observation: metalObservations.initial.input, observationStage: observationStage() + 1}));
                           
            return;


        } else if (observationStage() === 2){
            console.log(observationStage() + 1);
            dispatch(logFinalObservation({metal: metal.metal, observation: metalObservations.final.input, observationStage: observationStage() + 1}));                
            return;
        }

    }


    return (
        <div className="form-check translate-middle-x">
            <form>              

               {/*Submit initial observation */}                              
                
                {(observationStage() === 1) ?
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
            {(observationStage() === 2) ? 
            
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

