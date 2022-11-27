import React, { useState } from 'react';
import ReagentBottle from '../../components/Reagent-bottle/reagent';
import RowOfTubes from '../../features/rowOfTestTubes/RowOfTestTubes';
import ResetButton from '../../components/resetButton/resetButton';
//import { reset } from '../../features/rowOfTestTubes/rowOfTestTubesSlice';
//import Menu from '../../features/menu/Menu';
import ReactantMenu from '../../features/menu/ReactantMenu';




const ReactionsContainer = () => {
    /*const [reagent, setReagent] = useState('');

    const updateState = (reagent) => {
      setReagent(reagent);
    }
*/
const handleReset = (props) => {
  props.handleReset();

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
      <ReactantMenu/>
      </div>
    );

}

export default ReactionsContainer;

//border p-5 rounded position-relative mb-4
//style={{height: '102vh'}} the columns are the same height because the reagent bottle is so big

//onChange={updateState}
//reagent={reagent}