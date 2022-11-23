import React, { useState } from 'react';
//import cobalt from './cobalt.png';
//import imagesOfReactantsAndProducts from '../images/images';
import ExcessButton from '../excessButton/excessButton';
import imagesOfReactantsAndProducts from '../images/images-combined';
import './individual.css';
import excessProductFinder from '../functionModules/findExcessProduct';
import { useSelector, useDispatch } from 'react-redux';

/*
{imagesOfReactantsAndProducts.map((metal) => (
            <img 
            src={metal.link}
            alt={metal.altText}
            />
          ))}
*/


const IndividualTube = (props) => {
  //const [reagent, setReagent] = useState(props.reagent);
  const selectedReagent = useSelector(state => state.menu.selectedReagent);
    const placeholderCobaltImage = imagesOfReactantsAndProducts.products[0].link;

    const handleClick = (event) => {
      //alert('tube clicked');
      props.onClick(props.metal.metal);
      //event.currentTarget.disabled = true;

    }

//alert(props.reagent);


    const addExcessReagent = (metal, reagent) => {
      
      //alert(metal+reagent);
      const newProduct = excessProductFinder(metal, reagent);
      //alert(newProduct);
      const imageIndex = imagesOfReactantsAndProducts.products.findIndex(x => x.name === newProduct);
      
      const productImageDetails = imagesOfReactantsAndProducts.products[imageIndex];
      //alert(productImageDetails.link);
      props.handleExcessProduct(metal, productImageDetails);

    }
    
    

/*
        
*/

    return (
      <div>
        
        <button 
        className="test-tube"
        onClick={handleClick}
        aria-live="polite"
        disabled={!selectedReagent}
        
        >
          <img src={"images/test tube outline.png"} className="absolute-positioning-experiment"/>
          <img className="absolute-positioning-experiment"
          src={props.metal.link}                 
          style={props.metal.opaque? null : {opacity: 0.5}}
          alt={props.product.link ? null : props.metal.altText } 
                
          />
          {props.product ? <img 
          className="absolute-positioning-experiment" 
          src={props.product.link}
          style={props.product.opaque? null : {opacity: 0.5}}           
          alt={props.product.altText}
          /> : null }
        </button>
        {(selectedReagent.name === 'ammonia solution' || selectedReagent.name === 'sodium hydroxide') ? <ExcessButton 
        onClick={addExcessReagent}
        reagent={selectedReagent.name}
        metal={props.metal.metal}
        /> : null}
        
      </div>

    );

}

export default IndividualTube;

//{imagesOfTubesBeforeReaction[0][1]}