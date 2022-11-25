import React, { useEffect } from 'react';
import IndividualTube from '../../components/individual-test-tube/individual';
import imagesOfReactantsAndProducts from '../../components/images/images-combined';
import './row-of-test-tubes.css';
import productFinder from '../../components/functionModules/findProduct';
import ResetButton from '../../components/resetButton/resetButton';
import { useSelector, useDispatch } from 'react-redux';
import { data } from '../../data';
import { selectUnreactedMetals, showProducts, reset } from './rowOfTestTubesSlice';
import { useParams } from 'react-router-dom';
import '../../app/App.css';

const RowOfTubes = (props) => {
  const examBoard = useSelector(state => state.examBoard.selectedExamBoard);
  const selectedReagent = useSelector(state => state.menu.selectedReagent);
  const dispatch = useDispatch();
  const {reactant} = useParams();

  const generateMetalReactantsSet = () => {
    const matchedMetals = data.unreactedMetals.filter((x) => {      
      return data.metalIdsByReagent[examBoard][selectedReagent.name].includes(x.id);
      })
      return matchedMetals;
  }

  useEffect(() => {
    dispatch(reset());
        dispatch(selectUnreactedMetals(generateMetalReactantsSet()));
}, [reactant]);

const tubes = useSelector(state => state.rowOfTubes.unreactedMetals);

const products = useSelector(state => state.rowOfTubes.products); 



  const rowOfTubesStyling = {
    width: "100%",
    /*height: '400px',   
    backgroundImage: `url("images/laboratoryBackgroundTrial.jpg")`,*/ 
    backgroundImage: `url("images/laboratory-background.png")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflowY: 'scroll'    
  };

  const addReagent = (metal) => {       
   const newProduct = productFinder(metal, selectedReagent.name);
   const imageIndex = imagesOfReactantsAndProducts.products.findIndex(x => x.name === newProduct);
   const productImageDetails = imagesOfReactantsAndProducts.products[imageIndex];
   dispatch(showProducts({metal: metal, details: productImageDetails}))
  }
  
  const handleReset = () => {
    dispatch(reset());
    dispatch(selectUnreactedMetals(generateMetalReactantsSet()));
  }


const handleExcessProduct = (metal, productImageDetails) => {  
  dispatch(showProducts({metal: metal, details: productImageDetails}))
}


    return (
        <div className="row-of-tubes " style={rowOfTubesStyling}>
            <div className="row" style={{width: '100%', marginTop: '5%'}}>
            {tubes.map((metal) => (
                         
              
              <IndividualTube 
              metal={metal}
              reagent={selectedReagent.name}
              onClick={addReagent}
              product={products[metal.metal]}
              handleExcessProduct={handleExcessProduct}
              
              /> 
              
            
          ))}
          </div>
          { /*
              <ResetButton 
                onClick={handleReset}
              />
            */}
        </div>
        
        
    );
  };
  
  export default RowOfTubes;

  