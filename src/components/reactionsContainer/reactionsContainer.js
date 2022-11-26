import React, { useState } from 'react';
import ReagentBottle from '../../components/Reagent-bottle/reagent';
import RowOfTubes from '../../features/rowOfTestTubes/RowOfTestTubes';
import ResetButton from '../../components/resetButton/resetButton';
//import { reset } from '../../features/rowOfTestTubes/rowOfTestTubesSlice';




const ReactionsContainer = (props) => {
    const [reagent, setReagent] = useState('');

    const updateState = (reagent) => {
      setReagent(reagent);
    }

const handleReset = (props) => {
  props.handleReset();

}

    return (
      <div className="container-fluid border d-flex p-4 rounded position-relative mb-4 row" style={{marginLeft: '0px', marginRight: '0px'}}>
        
        <div className="col-md-2" >     
        <ReagentBottle  onChange={updateState}/>  
        <ResetButton 
         onClick={handleReset}/>   
        </div>   
        <div className="col-md-10" style={{height: 'auto'}}>
        <RowOfTubes 
        reagent={reagent}
        handleReset={handleReset}
        /> 
        </div> 
              
      </div>

    );

}

export default ReactionsContainer;

//border p-5 rounded position-relative mb-4
//style={{height: '102vh'}} the columns are the same height because the reagent bottle is so big