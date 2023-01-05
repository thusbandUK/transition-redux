import { useSelector, useDispatch } from 'react-redux';
import { inputInitialObservation, inputFinalObservation, logInitialObservation, logFinalObservation } from './observationFormSlice';
import '../../app/App.css';
import { incrementObservationStage } from '../../features/rowOfTestTubes/rowOfTestTubesSlice';
import ExcessButton from '../../components/excessButton/excessButton';
import imagesOfReactantsAndProducts from '../../components/images/images-combined';
import excessProductFinder from '../../components/functionModules/findExcessProduct';

/*

IMPORTANT NOTES TO RETAIN CONCERNING...

observationStage vs observationNumber

observationStage is about the code
observationNumber is about the chemistry

observationNumber basically means, is the user inputting their first, second or third observation

observationStage means, what is the code doing right now? This is because in between inputting observations, the user clicks buttons
to cause the chemical changes that they actually observe

observationStage / 2 = observationNumber

This is why observationStage starts at 2, so that...
a) the first observationNumber comes out at 1 (1st)
b) the observationForm renders

Users have to input their initial observation before they can observe any chemical changes
When observationStage is at an odd number, that is when the user can click either the tube or the excess button to observe further
changes
Each of the chemical changes increments observationStage by 1, meaning that having caused the chemical changes, the input form
returns so that users can log their next observation

*/

const ObservationForm = (props) => {    
    
    const dispatch = useDispatch();
 
    const metal = props.metal;

    const metalObservations = useSelector(state => state.observationForm.reactantsToObserve[metal.metal]);

    const observationStage = useSelector(state => state.rowOfTubes.unreactedMetals[metal.metal].observationStage);

    const selectedReagent = useSelector(state => state.menu.selectedReagent);


    //This function automatically writes any text input by the user to the state
    const observationToState = (event) => {        
        dispatch(inputInitialObservation({metal: metal.metal, observationNumber: ((observationStage/2).toString()), observation: event.target.value}));
    }

    //This function finalises the users input, upon pressing the submit button, to a new section of the state
    const submitObservation = (event) => {
        event.preventDefault();       
        //logs the observation to the state
        dispatch(logInitialObservation({metal: metal.metal, observationNumber: ((observationStage/2).toString()), observation: metalObservations[(observationStage/2).toString()].input}));
        //increments observationState by 1 to remove observation form and enable chemical change logic
        dispatch(incrementObservationStage({metal: metal.metal, newObservationStage: observationStage + 1}));
        return;

    }

    //This receives the metal and reagent from the excess button and adds the observationState, calling all three of which
    //as arguments for the handleExcessProduct function in rowOfTubes

    const addExcessReagent = (metal, reagent) => {
           
        //finds the name of new product
        const newProduct = excessProductFinder(metal, reagent);
        //locates the details of the new product
        const imageIndex = imagesOfReactantsAndProducts.products.findIndex(x => x.name === newProduct);
        //harvests the details of the new product
        const productImageDetails = imagesOfReactantsAndProducts.products[imageIndex];
        //calls the handleExcessProduct in rowOfTubes
        props.handleExcessProduct(metal, productImageDetails, observationStage);
  
      }

    return (
        <div className="form-check translate-middle-x">
            <form>              

               {/*form input elements to enter and submit observations */}                              
                
               {(observationStage % 2 === 0) ?
                
                <div>
                  <label style={{display: 'inline'}}>
                    {`Observation ${observationStage/2}`}
                  </label>
                
                  <input type="text"   onChange={observationToState} id={`flexCheck${props.metal.id}-initial`}/>
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

                {/*Renders an instruction to click the test tube to initiate chemical reaction */}

                {(observationStage === 3) ?                
                 <div>
                   <p>Click test tube</p>
                 </div>
                 : null }

                {/*Renders excess button after second observation input for reagents that have excess functionality */}

                <ul className="list-group list-group-horizontal mt-5 fs-5 d-flex justify-content-center">
                  {((observationStage === 5) && (selectedReagent.excess))
                   ? <ExcessButton 
                      onClick={addExcessReagent}                      
                      reagent={selectedReagent.name}
                      metal={metal.metal}
                      className='excess-button'
        
                     /> : null}
                </ul>
              
                </form>
            
        </div>
    )
}

export default ObservationForm;