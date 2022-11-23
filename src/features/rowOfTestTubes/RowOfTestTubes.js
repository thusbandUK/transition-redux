import React, { useState, useEffect } from 'react';
import IndividualTube from '../../components/individual-test-tube/individual';
//import imagesOfReactantsAndProducts from '../images/images';
import imagesOfReactantsAndProducts from '../../components/images/images-combined';
import './row-of-test-tubes.css';
import productFinder from '../../components/functionModules/findProduct';
//import Background from '../images/laboratory background.jpg';
//import background from "./images/laboratory background trial.jpg";
import ResetButton from '../../components/resetButton/resetButton';
import reagentsByExamBoard from '../../components/functionModules/reagentsByExamBoard';
import { useSelector, useDispatch } from 'react-redux';
import { data } from '../../data';
import { selectUnreactedMetals, showProducts, reset } from './rowOfTestTubesSlice';
import { NavLink, useParams } from 'react-router-dom';
import excessProductFinder from '../../components/functionModules/findExcessProduct';



const RowOfTubes = (props) => {

  
  //const [tubes, setTubes] = useState(imagesOfReactantsAndProducts.unreactedMetals);
  const examBoard = useSelector(state => state.examBoard.selectedExamBoard);
  const selectedReagent = useSelector(state => state.menu.selectedReagent);
 // const [tubes, setTubes] = useState(reagentsByExamBoard(examBoard));
  //const [tubesTest, setTubesTest] = useState(reagentsByExamBoard('OCRA'));
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
    //alert('use effect is getting');
    //alert(selectedReagent.name);    
      const matchedMetals = data.unreactedMetals.filter((x) => {      
        return data.metalIdsByReagent[examBoard][selectedReagent.name].includes(x.id);
        })
        //return matchedMetals;
        //alert(matchedMetals);
        //dispatch(selectUnreactedMetals(matchedMetals));
        dispatch(selectUnreactedMetals(generateMetalReactantsSet()));
    
    //handleReset();  
}, [reactant]);

const tubes = useSelector(state => state.rowOfTubes.unreactedMetals);

const products = useSelector(state => state.rowOfTubes.products);  


/*
  const [products, setProducts] = useState(

    {
      copper: {link: '', opaque: null},
      cobalt: {link: '', opaque: null},
      "iron II": {link: '', opaque: null},
      "iron III": {link: '', opaque: null},
      aluminium: {link: '', opaque: null},
      manganese: {link: '', opaque: null},
      chromium: {link: '', opaque: null}
  }
  )
*/
//alert((reagentsByExamBoard('OCRA'))[4].metal);

  const backgroundImage = imagesOfReactantsAndProducts.background[0].link;

  //alert(backgroundImage);

/*
,
      manganese: {link: '', opaque: null},
      chromium: {link: '', opaque: null}
*/


  const rowOfTubesStyling = {
    width: "100%",
    height: "400px",
    //backgroundImage: "url(/images.laboratoryBackgroundTrial.jpg)",
    backgroundImage: `url("images/laboratoryBackgroundTrial.jpg")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
    //backgroundImage: `url(${backgroundImage})`,
    //backgroundColor: 'red'
    
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

/*
const handleReset = () => {
  //alert('function in row of tubes activated');
  dispatch(reset());

  /*
  setProducts({
    copper: {link: '', opaque: null, altText: ''},
    cobalt: {link: '', opaque: null, altText: ''},
    "iron II": {link: '', opaque: null, altText: ''},
    "iron III": {link: '', opaque: null, altText: ''},
    aluminium: {link: '', opaque: null, altText: ''},
    manganese: {link: '', opaque: null, altText: ''},
    chromium: {link: '', opaque: null, altText: ''}
})

}
*/
/*
useEffect(() => {
  
    handleReset();
  
}, [props.reagent])
*/

const handleExcessProduct = (metal, productImageDetails) => {  
  dispatch(showProducts({metal: metal, details: productImageDetails}))
}

/*
const handleExcessProduct = (metal) => {
  //alert(productImageDetails);
  //alert('function called');
  //setProducts({...products, [metal]: productImageDetails})
  //alert('function called');
  const newProduct = excessProductFinder(metal, selectedReagent.name);
  const imageIndex = imagesOfReactantsAndProducts.products.findIndex(x => x.name === newProduct);
  const productImageDetails = imagesOfReactantsAndProducts.products[imageIndex];
  dispatch(showProducts({metal: metal, details: productImageDetails}))

}
*/
// && tubes.metal === 'iron II' || tubes.metal === 'aluminium'
//&& metal === 'iron II' || metal === 'aluminium')
/*
const removeTubesForHCl = (metal) => {
  if ((props.reagent === 'hydrochloric acid') && (metal === 'iron II' || metal === 'aluminium')) {
    return false;
  } else {
    return true;
  }

}
//
*/
    return (
        <div className="row-of-tubes" style={rowOfTubesStyling}>
            
            {tubes.map((metal) => (              
              <IndividualTube 
              metal={metal}
              reagent={selectedReagent.name}
              onClick={addReagent}
              product={products[metal.metal]}
              handleExcessProduct={handleExcessProduct}
              /> 
              
            
          ))}
          { 
              <ResetButton 
                onClick={handleReset}
              />
           }
        </div>
        
        
    );
  };
  
  export default RowOfTubes;

  /*
 {/*excessProduct={handleExcessProduct}*//*}

 handleExcessProduct={handleExcessProduct}

 handleExcessProduct={handleExcessProduct}
  */