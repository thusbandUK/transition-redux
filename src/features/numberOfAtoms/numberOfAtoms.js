import '../../app/App.css';
import React from 'react';
import { Outlet } from "react-router-dom";
//import Menu from '../features/menu/Menu';
import Header from '../../components/headerAndFooter/header';
import ReactionsContainer from '../../components/reactionsContainer/reactionsContainer';
import Introduction from '../../components/introduction/Introduction';
import { atomCalculator } from './numberOfAtomsLogic';
import { useSelector, useDispatch } from 'react-redux';
import { inputMass, submitMass } from './numberOfAtomsSlice';


function NumberOfAtoms(props) {  

  const currentMassInput = useSelector(state => state.numberOfAtoms.mass);
  const submittedMass = useSelector(state => state.numberOfAtoms.submittedMass);
  const dispatch = useDispatch();
  
  const massToState = (event) => {        
    dispatch(inputMass(event.target.value));
}

const submitMassToState = () => {
  
  dispatch(submitMass(currentMassInput));
  console.log(currentMassInput);
  atomCalculator.numberOfAtomsOfEachElementArray(currentMassInput);
}

//atomCalculator.numberOfAtomsOfEachElementArray(submittedMass);

const numberOfAtoms = atomCalculator._atomsPerElement;

let key = 0;
  return (
    
    <div className="App">
        <p>Hello I'm number of atoms page</p>
        <div id="landing">
        <div id="user-details" className="landing">
            <div className="input-status">

                <p id="input-display">Enter your mass in kilograms</p>

            </div>
            <div className="input-harvest">

                <input type="number" id="user-mass" onChange={massToState} value={currentMassInput}/>

                <button className="button" id="submit" onClick={submitMassToState}>Submit your mass</button>
                <button className="button" id="reset">Enter a different mass</button>
            </div>

        </div>
        <div id="instructions" className="landing">
            <p>
                Enter your mass in kilograms to find out how many atoms of each of the sixty or so elements your body contains.
            </p>


        </div>
    </div>
    <div className="row">
        {(submittedMass !== 0) ?
        numberOfAtoms.map((x) => (
          <div className="col-md-4" key={key = key + 1}>
          <p
          
          >{x.name}</p>
          <p >{x.atoms}</p>
          </div>
        ))
      : null}
      </div>
      
    </div>
    
  );
}

export default NumberOfAtoms;

/*
<Header />
      <section className="py-5">
        <div className="container">
          <div className="reagents-and-tubes">
          
          </div>        
            
          
           
        </div>
      </section>
      
      <footer className="border-top py-5 overflow-hidden position-relative">        
        <div className="container">Copyright T Husband</div>
      </footer>
*/