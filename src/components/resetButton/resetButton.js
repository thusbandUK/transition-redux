import React from 'react';
import '../../app/App.css';
import { reset } from '../../features/rowOfTestTubes/rowOfTestTubesSlice';
import { useDispatch } from 'react-redux';



const ResetButton = (props) => {  
  
    const dispatch = useDispatch();

    const handleClick = () => {        
        dispatch(reset());
    }
  
    return (
      <div className="excess-or-reset-button-container">
        <ul className="list-group list-group-horizontal mt-5 fs-5 d-flex justify-content-center">
        <button 
        className="reset-button list-group-item w-100 rounded"
        
        onClick={handleClick}
        >
          reset button        
        </button>
        </ul>
        
      </div>

    );

}

export default ResetButton;