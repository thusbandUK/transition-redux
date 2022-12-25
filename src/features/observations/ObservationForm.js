import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { inputInitialObservation, inputFinalObservation, logInitialObservation, logFinalObservation } from './observationFormSlice';
import '../../app/App.css';
import InitialObservation from './observationStages/initialObservation';

const ObservationForm = (props) => {
    //console.log('observation form props are...')
    //console.log(props.props.metal.metal);
const dispatch = useDispatch();
//console.log('Observation form props...');
//console.log(props);
    
/*this will need a format that adds the detail for each observation form to a different metal and it would be good, with an eye
on the future, if the first move was to basically harvest the reactants already in the state, but the logic for that wouldn't
operate from an individual rendering of the observation form, it should render from the overall parent, which is maybe rowOfTubes?

*/
//const metal = props.props.metal.metal;
const metal = props.props.metal;
//console.log(metal);
const metalObservations = useSelector(state => state.observationFormSlice.reactantsToObserve[metal.metal]);
//console.log(metalObservations.initial.input);
let initialLogged = false;
//const observationStage = useSelector(state => state.observationFormSlice.reactantsToObserve[metal.metal].observationStage);

const observationStage = metalObservations.observationStage;
//console.log(observationStage);



    const initialObservationToState = (event) => {        
        dispatch(inputInitialObservation({metal: metal.metal, observation: event.target.value}));

    }

    const finalObservationToState = (event) => {
        dispatch(inputFinalObservation({metal: metal.metal, observation: event.target.value}));
    }


    const submitObservation = (event) => {
        event.preventDefault();
        //console.log(initialLogged);
        
        if (observationStage === 1){
            dispatch(logInitialObservation({metal: metal.metal, observation: metalObservations.initial.input, observationStage: observationStage + 1}));
                
            //initialLogged = true;
           // console.log(initialLogged);
            return;


        } else if (initialLogged){
            dispatch(logFinalObservation({metal: metal.metal, observation: metalObservations.final.input}));                
            return;
        }
/**/
    }



/*
    const conditionalRender = () => {
        //alert('function called');
        if(metal === "copper"){
            return (<div>
            <label>
                Initial observation
            </label>
            
            <input type="text"   onChange={initialObservationToState} id={`flexCheck${props.props.metal.id}-initial`}/>
            </div>)
        } else {
            return <p>Not copper!</p>
        }
    }

    useEffect (() => {
        //alert('function called');
        conditionalRender();
    }, [metal, dispatch])

//SO YOU DID TRANSLATE-MIDDLE-X AND IT DOESN'T LOOK LIKE A BAD WORK AROUND BUT DON'T FORGET THAT YOU DID IT AND IF YOU KEEP IT
//YOU'LL NEED TO FIGURE OUT WHY IT BREAKS WHEN THEY STACK ON MOBILE DEVICES

/*
so what I'd like is to get a sequential system going where you have to input your first observation, then you can click the test
tube, then you have to enter your next observation, and then the excess button appears, which you press and then submit a final
observation and then the form disappears and the observations are printed in the first page of the text box that appears

so maybe just a ton of ternary operators and maybe these things could all have individual components?
{!initial ? <Initial /> : null}
{initial ? <Second /> : null}
{excess && seccond? <Excess/> : null}
{excessProduct ? <Final /> : null}
and then the form needs to disappear when the final submit button is clicked

*/

    return (
        <div className="form-check translate-middle-x">
            <form>
               {/** 
               {conditionalRender()}*/}

               {/*Submit initial observation */}
                
               
             
              
             {/* {!initialLogged ?*/}
               {(observationStage === 1) ?
               <div>
                <label>
                    Initial observation
                </label>
                
                <input type="text"   onChange={initialObservationToState} id={`flexCheck${props.props.metal.id}-initial`}/>
                </div>
                : null }


            {/*Submit second observation */}
            {/*{initialLogged ?*/}
            {(observationStage === 2) ? 
            
                <div>
                <label>
                    Final observation
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

/*
<InitialObservation 
               onChange={initialObservationToState}
               metal={metal}               
               />
               : null }
               {/*{!metalObservations.initial.input ? 

*/