import React, { useState } from 'react';
import ReagentBottle from '../../components/Reagent-bottle/reagent';
import RowOfTubes from '../../features/rowOfTestTubes/RowOfTestTubes';

const ReactionsContainer = (props) => {
    const [reagent, setReagent] = useState('');

    const updateState = (reagent) => {
      setReagent(reagent);
    }

    return (
      <div>        
        <ReagentBottle onChange={updateState}/>        
        <RowOfTubes reagent={reagent}/>        
      </div>

    );

}

export default ReactionsContainer;