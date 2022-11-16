import React from 'react';
//import ExcessButton from '../excessButton/excessButton';
import './resetButton.css';


const ResetButton = (props) => {
  //const [reagent, setReagent] = useState(props.reagent);
  
    const handleClick = () => {
        props.onClick();

    }
  
    return (
      <div>
        
        <button 
        className="reset-button"
        onClick={handleClick}
        >
          reset button        
        </button>
        
        
      </div>

    );

}

export default ResetButton;

//{imagesOfTubesBeforeReaction[0][1]}