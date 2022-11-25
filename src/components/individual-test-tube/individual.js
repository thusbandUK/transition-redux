import React from 'react';
import ExcessButton from '../excessButton/excessButton';
import imagesOfReactantsAndProducts from '../images/images-combined';
import './individual.css';
import excessProductFinder from '../functionModules/findExcessProduct';
import { useSelector } from 'react-redux';
import '../../app/App.css';


const IndividualTube = (props) => {
  
  const selectedReagent = useSelector(state => state.menu.selectedReagent);
    

    const handleClick = (event) => {      
      props.onClick(props.metal.metal);
    }

    const addExcessReagent = (metal, reagent) => {
      
      //alert(metal+reagent);
      const newProduct = excessProductFinder(metal, reagent);
      //alert(newProduct);
      const imageIndex = imagesOfReactantsAndProducts.products.findIndex(x => x.name === newProduct);
      
      const productImageDetails = imagesOfReactantsAndProducts.products[imageIndex];
      //alert(productImageDetails.link);
      props.handleExcessProduct(metal, productImageDetails);

    }
    
    



    return (      
      <div className="col-md-2 d-flex flex-column container" style={{height: '400px'}}> 
        <button 
        className="test-tube "
        onClick={handleClick}
        aria-live="polite"
        disabled={!selectedReagent}
        
        >
          {/* img-fluid */}
          <img src={"images/test tube outline.png"} className="position-absolute top-0 start-0 mx-auto img-fluid"/>
          <img className="position-absolute top-0 start-0 mx-auto img-fluid"
          src={props.metal.link}                 
          style={props.metal.opaque? null : {opacity: 0.5}}
          alt={props.product.link ? null : props.metal.altText } 
                
          />
          {props.product ? <img 
          className="position-absolute top-0 start-0 mx-auto img-fluid" 
          src={props.product.link}
          style={props.product.opaque? null : {opacity: 0.5}}           
          alt={props.product.altText}
          /> : null }
        </button>
         
        {(selectedReagent.name === 'ammonia solution' || selectedReagent.name === 'sodium hydroxide') ? <ExcessButton 
        onClick={addExcessReagent}
        reagent={selectedReagent.name}
        metal={props.metal.metal}
        className='excess-button'
        /> : null}
        
      </div>

    );

}

export default IndividualTube;

//{imagesOfTubesBeforeReaction[0][1]}

//"absolute-positioning-experiment  img-fluid"

//style={{height: '400px'}}