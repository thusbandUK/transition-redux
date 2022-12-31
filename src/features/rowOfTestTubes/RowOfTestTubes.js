import React, { useCallback, useEffect } from 'react';
import IndividualTube from '../../components/individual-test-tube/individual';
import imagesOfReactantsAndProducts from '../../components/images/images-combined';
import './row-of-test-tubes.css';
import productFinder from '../../components/functionModules/findProduct';
import { useSelector, useDispatch } from 'react-redux';
import { data } from '../../data';
import { selectUnreactedMetals, showProducts, reset } from './rowOfTestTubesSlice';
import { selectReactantsToObserve } from '../observations/observationFormSlice';
import { useParams } from 'react-router-dom';
import '../../app/App.css';


const RowOfTubes = () => {
  const examBoard = useSelector(state => state.examBoard.selectedExamBoard);
  const selectedReagent = useSelector(state => state.menu.selectedReagent);
  const dispatch = useDispatch();
  const {reactant} = useParams();
  const unreactedMetals = useSelector(state => state.rowOfTubes.unreactedMetals);
  const unreactedMetals2 = useSelector(state => state.rowOfTubes.unreactedMetals2);

 
  //filters the available reactants in data.js to identify the ones used by the exam board and with the reagent in question

  const generateMetalReactantsSet = useCallback(() => {
    const matchedMetals = data.unreactedMetals.filter((x) => {      
      return data.metalIdsByReagent[examBoard][selectedReagent.name].includes(x.id);
      })
      
      return matchedMetals;
  }, [examBoard, selectedReagent.name])

  //effect hook removes any product images from previous reactions and loads up the relevant unreacted metal solutions

  useEffect(() => {
    //resets reactants part of state
    dispatch(reset());
    //obtains set of reactants to render
    let setOfReactants = generateMetalReactantsSet();
    //transforms array into an object for addition to state
    const objectFromArray = setOfReactants.reduce((accumulator, currentValue) => ({...accumulator, [currentValue.metal]: (({id, link, altText, opaque}) => ({id, link, altText, opaque}))(currentValue)}), {});
    //dispatches set of reacted metals to state
    dispatch(selectUnreactedMetals(objectFromArray));
    //creates a set of metals in which for observations to be logged
    dispatch(selectReactantsToObserve(objectFromArray));

}, [dispatch, generateMetalReactantsSet, reactant]);

//defines array from which is mapped the instances of each individual test tubes

const tubes = useSelector(state => state.rowOfTubes.unreactedMetals);

//reference to products stored in state so individual test tubes know which product image to render

const products = useSelector(state => state.rowOfTubes.unreactedMetals);

//partial styling for row of test tubes, see also row-of-test-tubes.css

  const rowOfTubesStyling = {
    width: "100%",
    backgroundImage: `url("images/laboratory-background.png")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  //function for when reagent is added to individual test tubes 

  const addReagent = (metal) => {        
    if (products[metal].product.link){           
      return;
    }
   const newProduct = productFinder(metal, selectedReagent.name);   
   const imageIndex = imagesOfReactantsAndProducts.products.findIndex(x => x.name === newProduct);
   const productImageDetails = imagesOfReactantsAndProducts.products[imageIndex];  
   dispatch(showProducts({metal: metal, details: productImageDetails}))
  }
  
//function to handle excess product (see also handleExcessClick in excessButton.js and addExcessReagent in individual.js)

const handleExcessProduct = (metal, productImageDetails) => {    
  dispatch(showProducts({metal: metal, details: productImageDetails}))
}


    return (
        <div className="row-of-tubes rounded overflow-auto" style={rowOfTubesStyling}>
            <div className="row" style={{width: '100%', marginTop: '5%'}}>
           
         {Object.entries(unreactedMetals).map(([key, value]) => (
            <IndividualTube
            key={value.id}
            metal={{...value, metal: key}}           
            reagent={selectedReagent.name}
            onClick={addReagent}
            product={value.product}
            handleExcessProduct={handleExcessProduct}
            />
          ))}
          
          </div>
          
        </div>
        
        
    );
  };
  
  export default RowOfTubes;

  