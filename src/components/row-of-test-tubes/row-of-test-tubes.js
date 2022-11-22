import React, { useState, useEffect } from 'react';
import IndividualTube from '../individual-test-tube/individual';
//import imagesOfReactantsAndProducts from '../images/images';
import imagesOfReactantsAndProducts from '../images/images-combined';
import './row-of-test-tubes.css';
import productFinder from '../functionModules/findProduct';
//import Background from '../images/laboratory background.jpg';
//import background from "./images/laboratory background trial.jpg";
import ResetButton from '../resetButton/resetButton';
import reagentsByExamBoard from '../functionModules/reagentsByExamBoard';
import { useSelector, useDispatch } from 'react-redux';


const RowOfTubes = (props) => {

  //const [tubes, setTubes] = useState(imagesOfReactantsAndProducts.unreactedMetals);
  const examBoard = useSelector(state => state.examBoard.selectedExamBoard);
  const selectedReagent = useSelector(state => state.menu.selectedReagent);
  const [tubes, setTubes] = useState(reagentsByExamBoard(examBoard));
  //const [tubesTest, setTubesTest] = useState(reagentsByExamBoard('OCRA'));
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
    if (products[metal].link){
      return;
    }
   const newProduct = productFinder(metal, props.reagent);   
   const imageIndex = imagesOfReactantsAndProducts.products.findIndex(x => x.name === newProduct);
   //alert(imageIndex);
   const productImageDetails = imagesOfReactantsAndProducts.products[imageIndex];
   //index = a.findIndex(x => x.prop2 ==="yutu");
   

   setProducts({...products, [metal]: productImageDetails});   
   //alert(productImageDetails.opaque);
   //alert(Object.values(products));
  }
  

const handleReset = () => {
  //alert('function in row of tubes activated');
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

useEffect(() => {
  
    handleReset();
  
}, [props.reagent])

const handleExcessProduct = (metal, productImageDetails) => {
  //alert(productImageDetails);
  //alert('function called');
  setProducts({...products, [metal]: productImageDetails})

}

// && tubes.metal === 'iron II' || tubes.metal === 'aluminium'
//&& metal === 'iron II' || metal === 'aluminium')

const removeTubesForHCl = (metal) => {
  if ((props.reagent === 'hydrochloric acid') && (metal === 'iron II' || metal === 'aluminium')) {
    return false;
  } else {
    return true;
  }

}
//
    return (
        <div className="row-of-tubes" style={rowOfTubesStyling}>
            
            {tubes.map((metal) => (
              removeTubesForHCl(metal.metal) ?
              <IndividualTube 
              metal={metal}
              reagent={props.reagent}
              onClick={addReagent}
              product={products[metal.metal]}
              handleExcessProduct={handleExcessProduct}
              /> : null
              
            
          ))}
              <ResetButton 
                onClick={handleReset}
              />
           
        </div>
        
        
    );
  };
  
  export default RowOfTubes;

  /*
 {/*excessProduct={handleExcessProduct}*//*}

 
  */