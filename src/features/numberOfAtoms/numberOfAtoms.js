import '../../app/App.css';
import React, { useEffect } from 'react';
import { atomCalculator } from './numberOfAtomsLogic';
import { useSelector, useDispatch } from 'react-redux';
import { inputMass, submitMass, resetMassValuesInState } from './numberOfAtomsSlice';


function NumberOfAtoms(props) {  

  const currentMassInput = useSelector(state => state.numberOfAtoms.mass);
  const submittedMass = useSelector(state => state.numberOfAtoms.submittedMass);
  const dispatch = useDispatch();
  
  const massToState = (event) => {        
    dispatch(inputMass(event.target.value));
}

useEffect(() => {
  
  dispatch(resetMassValuesInState());
  

}, [dispatch]);

const submitMassToState = () => {
  
  dispatch(submitMass(currentMassInput));
  console.log(currentMassInput);
  atomCalculator.numberOfAtomsOfEachElementArray(currentMassInput);
}

const resetCalculator = () => {
  dispatch(resetMassValuesInState());

}

const numberOfAtoms = atomCalculator._atomsPerElement;

let key = 0;
  return (
    
    <div className="App">    
        <p className="fs-5">Have you ever wondered what elements your body contains? There are some surprising results! Scientific analysis<sup>1</sup>  
         has found that the human body may contain the poison arsenic, the radioactive element uranium and even the precious metal gold. On this page
          you can get an estimate of the number of atoms of each element in your body. Simply enter your mass in kilograms and click
           submit.</p>
        {/*https://en.wikipedia.org/wiki/Composition_of_the_human_body */}
        <div id="landing">
        <div id="user-details" className="landing">
            
            <div className="row input-harvest list-group list-group-horizontal mt-5 fs-5">
              
              
                <div className="col-md-4 mt-3" >
                  <div className=" form-floating list-group-item d-block w-100 h-100 text-decoration-none rounded-3">
                  <input style={{border: '0px'}} className="form-control" type="number" id="user-mass" onChange={massToState} value={currentMassInput}/>
                  <label className="ms-3" for="user-mass">mass / kg</label>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                <button disabled={submittedMass} className="button list-group-item d-block w-100 h-100 rounded-3 text-decoration-none" id="submit" onClick={submitMassToState}>Submit your mass</button>
                </div>
                <div className="col-md-4 mt-3">
                <button disabled={!submittedMass} className="button list-group-item d-block w-100 h-100 rounded-3 text-decoration-none" id="reset" onClick={resetCalculator} >Enter a different mass</button>
                </div>
                <ul className="list-group list-group-horizontal mt-5 fs-5"></ul>
            </div>
            
        </div>
        <div id="instructions" className="landing">
            


        </div>
    </div>
    <div className="row list-group d-flex flex-row mt-4 fs-5">
      
        {(submittedMass !== 0) ?
        numberOfAtoms.map((x) => (
          <div className="col-md-4 mt-4 rounded-3" key={key = key + 1}>
            <li className="list-group-item bg-light">
              <p>{x.name}</p>
              <p >{x.atoms}</p>
            </li>
          </div>
        ))
      : null}
      
      </div>
      <p className="mt-5"><strong>References:</strong></p>
      <p>1: Emsley, John (25 August 2011). Nature's Building Blocks: An A-Z Guide to the Elements. OUP Oxford. p. 83. ISBN 978-0-19-960563-7.</p>
    </div>
    
  );
}

export default NumberOfAtoms;
