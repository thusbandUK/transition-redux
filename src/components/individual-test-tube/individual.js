import React from 'react';
import './individual.css';
import { useSelector, useDispatch } from 'react-redux';
import '../../app/App.css';
import ObservationForm from '../../features/observations/ObservationForm';
import { incrementObservationStage } from '../../features/rowOfTestTubes/rowOfTestTubesSlice';
import RevealElement from '../revealElement/RevealElement';

const IndividualTube = (props) => { 
  
  const metal = props.metal.metal;
  
  const observationStage = useSelector(state => state.rowOfTubes.unreactedMetals[metal].observationStage);
 
  const dispatch = useDispatch();

      const handleClick = (event) => {         
      props.onClick(props.metal.metal);
      dispatch(incrementObservationStage({metal: metal, newObservationStage: observationStage + 1}))      
    }
    
   
    return (      
      <div className="col-md-2 d-flex flex-column container p-0 m-0" style={{height: '400px'}}> 
      <p className='text-center'>{props.metal.metal}</p>
      
        
        <button 
        className="test-tube p-0 m-0"
        onClick={handleClick}
        aria-live="polite"
        disabled={observationStage !== 3}
        style={{height: '40%'}}
        
        >
          {/* mx-auto */}
          
          <img src={window.location.origin  + "/images/test tube outline.png"} className="position-absolute top-0 translate-middle-x" alt=""/>
          <img className="position-absolute top-0 translate-middle-x"
          src={window.location.origin + `${props.metal.link}`}                 
          style={props.metal.opaque? null : {opacity: 0.5}}
          alt={props.product.link ? '' : props.metal.altText } 
                
          />
          
          <img 
          className="position-absolute top-0 translate-middle-x" 
          src={!props.product.link ? "/images/test tube outline.png" : `${window.location.origin}/${props.product.link}`}
          style={{visibility: props.product ? 'visible' : 'hidden', opacity: props.product.opaque ? null : '0.5'}}                     
          alt={props.product.altText}
          />
          
        </button>
        <div className="container-non-bootstrap">
       <ObservationForm
       key={props.metal.id}       
       metal={props.metal}
       handleExcessProduct={props.handleExcessProduct}
      
       />
       </div>
      </div>

    );

}

export default IndividualTube;