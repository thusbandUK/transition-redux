import React, { useEffect, useState } from 'react';
//import reagentBottleImages from '../images/reagent-bottle-images';
import imagesOfReactantsAndProducts from '../images/images-combined';
import './reagent.css';
import { useSelector, useDispatch } from 'react-redux';
import { data } from '../../data';

                

const ReagentBottle = (props) => {


    const selectedReagent = useSelector(state => state.menu.selectedReagent);
    
    const selectedReagentImage = selectedReagent.link;
    
    /*
    data.reagentOptions.filter((x) => {
      if (x.name === selectedReagent){
        //alert(x.link);
        return x.link;
      }
    });
*/
    //alert(selectedReagentImage[0].name);

    /*
    const [reagents, setReagents] = useState([]);
    const [selectedReagent, setSelectedReagent] = useState('');    
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
      const reactingReagents = imagesOfReactantsAndProducts.reagentBottles.filter((element, index) => {
        return index !== 4;
      });
      const placeHolderReagent = imagesOfReactantsAndProducts.reagentBottles[4].link;
      setReagents(reactingReagents);
      setSelectedImage(placeHolderReagent);
      
    }, [])


    const imageUpdate = (reagentName) => {
      let x;
      for (x=0; x< reagents.length; x++){
        if (reagents[x].reagent.includes(reagentName)){
          setSelectedImage(reagents[x].link);
        }
    }
    }

    const onReagentSelection = (e) => {
        e.preventDefault();
        let index = e.target.value;        
        setSelectedReagent(e.target.value);        
        imageUpdate(e.target.value);
        props.onChange(e.target.value);
        } 

      */
      return (
          <div className="reagent-bottle-selection">
            <img className="reagent-bottle-image" src={selectedReagentImage}/>    
            
              
          </div>
          
          
      );
    };
    
    export default ReagentBottle;

    
    /*
    <select  value={selectedReagent} onChange={onReagentSelection} name="reagent-selection">
                <option disabled={true} value="">Select a reagent</option>
                {reagents.map((selection) => (
                    <option value={selection.reagent}>{selection.reagent}</option>
                ))}              
            </select>
    
    */