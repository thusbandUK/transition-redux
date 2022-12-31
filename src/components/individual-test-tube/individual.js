import React from 'react';
import ExcessButton from '../excessButton/excessButton';
import imagesOfReactantsAndProducts from '../images/images-combined';
import './individual.css';
import excessProductFinder from '../functionModules/findExcessProduct';
import { useSelector } from 'react-redux';
import '../../app/App.css';
import ObservationForm from '../../features/observations/ObservationForm';

const IndividualTube = (props) => {
  //console.log(`individual tube props...`);
  console.log(props);
  
  const selectedReagent = useSelector(state => state.menu.selectedReagent);
  
  const metal = props.metal.metal;
  //const metalObservations = useSelector(state => state.observationFormSlice.reactantsToObserve[metal]);
  //console.log(metalObservations);
/*
  const observationStage = () => {
    if (!metalObservations){
       //console.log('undefined');
        return 1;
    } else {
       // console.log('defined');
        return metalObservations.observationStage;
    }
}
*/
    

    const handleClick = (event) => {      
      props.onClick(props.metal.metal);
      //add code here to increase observationStage by 1
    }


    //need to move this elsewhere? It would be code if the button was rendered by the observation form but again, might that
    //cause the kind of problem where pandemonium ensues because a child component is modifying a parent component?
    const addExcessReagent = (metal, reagent) => {
            
      const newProduct = excessProductFinder(metal, reagent);
      
      const imageIndex = imagesOfReactantsAndProducts.products.findIndex(x => x.name === newProduct);
      
      const productImageDetails = imagesOfReactantsAndProducts.products[imageIndex];
      //console.log(productImageDetails);
      props.handleExcessProduct(metal, productImageDetails);

    }
    
    



    return (      
      <div className="col-md-2 d-flex flex-column container " style={{height: '400px'}}> 
      
        
        <button 
        className="test-tube "
        onClick={handleClick}
        aria-live="polite"
        
        
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
        
        <ul className="list-group list-group-horizontal mt-5 fs-5 d-flex justify-content-center">
        {(selectedReagent.name === 'ammonia solution' || selectedReagent.name === 'sodium hydroxide') ? <ExcessButton 
        onClick={addExcessReagent}
        reagent={selectedReagent.name}
        metal={props.metal.metal}
        className='excess-button'
        
        /> : null}
      </ul>
      
       <ObservationForm
       key={props.metal.id}
       props={props}
       
       />
      </div>

    );

}

export default IndividualTube;

//disabled={observationStage() === 1}



//{imagesOfTubesBeforeReaction[0][1]}

//"absolute-positioning-experiment  img-fluid"

//style={{height: '400px'}}