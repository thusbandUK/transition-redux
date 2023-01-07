import React from 'react';
import './individual.css';
import { useSelector, useDispatch } from 'react-redux';
import '../../app/App.css';
import ObservationForm from '../../features/observations/ObservationForm';
import { incrementObservationStage } from '../../features/rowOfTestTubes/rowOfTestTubesSlice';

const IndividualTube = (props) => { 
  
  const metal = props.metal.metal;
  
  const observationStage = useSelector(state => state.rowOfTubes.unreactedMetals[metal].observationStage);
 
  const dispatch = useDispatch();

      const handleClick = (event) => {         
      props.onClick(props.metal.metal);
      dispatch(incrementObservationStage({metal: metal, newObservationStage: observationStage + 1}))      
    }
    
    return (      
      <div className="col-md-2 d-flex flex-column container " style={{height: '400px'}}> 
      
        
        <button 
        className="test-tube "
        onClick={handleClick}
        aria-live="polite"
        disabled={observationStage !== 3}
        
        >
          {/* mx-auto */}
          <img src={"images/test tube outline.png"} className="position-absolute top-0 translate-middle-x" alt=""/>
          <img className="position-absolute top-0 translate-middle-x"
          src={props.metal.link}                 
          style={props.metal.opaque? null : {opacity: 0.5}}
          alt={props.product.link ? '' : props.metal.altText } 
                
          />
          {props.product ? <img 
          className="position-absolute top-0 translate-middle-x" 
          src={props.product.link}
          style={props.product.opaque? null : {opacity: 0.5}}           
          alt={props.product.altText}
          /> : null }
        </button>
        
       <ObservationForm
       key={props.metal.id}       
       metal={props.metal}
       handleExcessProduct={props.handleExcessProduct}
       />
      </div>

    );

}

export default IndividualTube;