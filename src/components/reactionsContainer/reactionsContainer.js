import React, { useEffect, useState } from 'react';
//import cobalt from './cobalt.png';
//import imagesOfReactantsAndProducts from '../images/images';
import ExcessButton from '../excessButton/excessButton';
import imagesOfReactantsAndProducts from '../images/images-combined';
///import './individual.css';
import excessProductFinder from '../functionModules/findExcessProduct';
import RowOfTubes from '../../components/row-of-test-tubes/row-of-test-tubes';
import ReagentBottle from '../../components/Reagent-bottle/reagent';




const ReactionsContainer = (props) => {
    const [reagent, setReagent] = useState('');

    const updateState = (reagent) => {
      setReagent(reagent);
      //ResetButton.handleClick();
      //alert('surely theres a function here');
    }

    return (
      <div>
        <ReagentBottle onChange={updateState}/>
        <RowOfTubes reagent={reagent}/>
        
        
      </div>

    );

}

export default ReactionsContainer;

