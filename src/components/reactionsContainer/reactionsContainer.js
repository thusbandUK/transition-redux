import React, { useState } from 'react';
import ReagentBottle from '../../components/Reagent-bottle/reagent';
import RowOfTubes from '../../features/rowOfTestTubes/RowOfTestTubes';

const ReactionsContainer = (props) => {
    const [reagent, setReagent] = useState('');

    const updateState = (reagent) => {
      setReagent(reagent);
    }

    return (
      <div className="container-fluid border p-5 rounded position-relative mb-4">        
        <ReagentBottle onChange={updateState}/>        
        <RowOfTubes reagent={reagent}/>        
      </div>

    );

}

export default ReactionsContainer;

//border p-5 rounded position-relative mb-4