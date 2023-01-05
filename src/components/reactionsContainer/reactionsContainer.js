import React from 'react';
import ReagentBottle from '../../components/Reagent-bottle/reagent';
import RowOfTubes from '../../features/rowOfTestTubes/RowOfTestTubes';
import ResetButton from '../../components/resetButton/resetButton';
//import { reset } from '../../features/rowOfTestTubes/rowOfTestTubesSlice';
//import Menu from '../../features/menu/Menu';
import ReactantMenu from '../../features/menu/ReactantMenu';
import TextBoxCreator from '../../features/textBoxCreator/TextBoxCreator';
import { useSelector, useDispatch } from 'react-redux';

const ReactionsContainer = () => {
    
const observations = useSelector(state => state.observationForm.reactantsToObserve);

const handleReset = (props) => {
  props.handleReset();

}

const textBoxRender = () => {
  let newArray = Object.values(observations);
  //if the observations section has not yet been compiled, the below returns false
  if (newArray.length === 0){
    //console.log('if statements');
    return false;
  }
  //once every observationComplete is set to true, the function as a whole returns true
  const allObservationsComplete = Object.values(newArray).every((entry) => entry.observationComplete);
  return allObservationsComplete;
  
}

    return (
      <div>
      <div className="container-fluid border d-flex p-4 rounded position-relative mb-4 row" style={{marginLeft: '0px', marginRight: '0px'}}>
        
        <div className="col-md-2" >     
        <ReagentBottle  />  
        <ResetButton 
         onClick={handleReset}/>   
        </div>   
        <div className="col-md-10" style={{height: 'auto'}}>
        <RowOfTubes 
        
        handleReset={handleReset}
        /> 
        </div>       

      </div>
      
      {textBoxRender() ?
          <div><p>I will be the textBoxCreator</p></div> : null}

      <ReactantMenu/>
      </div>
    );

}

export default ReactionsContainer;

//border p-5 rounded position-relative mb-4
//style={{height: '102vh'}} the columns are the same height because the reagent bottle is so big

//onChange={updateState}
//reagent={reagent}