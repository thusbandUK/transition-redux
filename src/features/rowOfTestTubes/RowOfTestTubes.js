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

  /*
console.log(unreactedMetals);
  let objectOfReactantsToObserve = {};
    unreactedMetals.forEach((reactantEntry) => {
      console.log(reactantEntry.metal);
      console.log({...objectOfReactantsToObserve, [reactantEntry.metal]: ''});
      return {...objectOfReactantsToObserve, [reactantEntry.metal]: ''} 
})
    console.log(objectOfReactantsToObserve);
    */
  //console.log(unreactedMetals);
  //localStorage.setItem.JSONstringify('unreactedMetals', unreactedMetals);

//console.log((({metal}) => ({metal}))(unreactedMetals));

  //filters the available reactants in data.js to identify the ones used by the exam board and with the reagent in question

  const generateMetalReactantsSet = useCallback(() => {
    const matchedMetals = data.unreactedMetals.filter((x) => {      
      return data.metalIdsByReagent[examBoard][selectedReagent.name].includes(x.id);
      })
      
      return matchedMetals;
  }, [examBoard, selectedReagent.name])

  //effect hook removes any product images from previous reactions and loads up the relevant unreacted metal solutions

  useEffect(() => {
    dispatch(reset());
    dispatch(selectUnreactedMetals(generateMetalReactantsSet()));

}, [dispatch, generateMetalReactantsSet, reactant]);

//effect hook assigns a set of reactants for which to file observations

useEffect(() => {
  let objectOfReactantsToObserve = {}
    unreactedMetals.map((entry) => {
      objectOfReactantsToObserve = {...objectOfReactantsToObserve, [entry.metal]: {observationStage: 1, initial: {input: '', logged: ''}, final: {input: '', logged: ''}}}

    })
//console.log(objectOfReactantsToObserve);

dispatch(selectReactantsToObserve(objectOfReactantsToObserve));
}, [unreactedMetals, reactant])

//defines array from which is mapped the instances of each individual test tubes

const tubes = useSelector(state => state.rowOfTubes.unreactedMetals);

//reference to products stored in state so individual test tubes know which product image to render

const products = useSelector(state => state.rowOfTubes.products); 

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
    if (products[metal].link){
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
            {tubes.map((metal) => (
              
              <IndividualTube 
              key={metal.id}
              metal={metal}
              reagent={selectedReagent.name}
              onClick={addReagent}
              product={products[metal.metal]}
              handleExcessProduct={handleExcessProduct}              
              />
              
              
          ))}
          
          </div>
          
        </div>
        
        
    );
  };
  
  export default RowOfTubes;

  