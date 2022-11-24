import '../../app/App.css';
import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { data } from '../../data';
import { selectReagent, selectReagentOptions } from './menuSlice';

const Menu = () => {

    const examBoard = useSelector(state => state.examBoard.selectedExamBoard);
    const reagentOptions = useSelector(state => state.menu.reagentOptions);
    const dispatch = useDispatch()
    
    useEffect(() => {   
          const reagentOptions = data.reagentOptions.filter((reagent) => {
            if (reagent.true.includes(examBoard)){
              //delete reagent.true;
              return reagent;
             // return {id: reagent.id,
                //name: reagent.name};
            }          
          })
      dispatch(selectReagentOptions(reagentOptions))
  }, [dispatch, examBoard]);

/*

SWITCH THE BELOW FOR THE ABOVE AT SOME POINT

useEffect(() => {  
          let reagentOptions; 
          data.reagentOptions.map((reagent) => {
            if (reagent.true.includes(examBoard)){
              delete reagent.true;
              reagentOptions.push(reagent);             
            }          
          })
      dispatch(selectReagentOptions(reagentOptions))
  }, [examBoard]);




*/





      const {reactant} = useParams();

      const menuWriter = (currentUrl, direction) => {  
        var reagentObject = {name: '', path: '/', linkText: ''};
       if (!reactant) {    
         return reagentObject;
       }
         
       let currentReagent;
       reagentOptions.forEach((x) => {    
        if (x.path.includes(currentUrl) === true){      
          currentReagent = x;
        }
      })
        if (direction === ''){
          return currentReagent;
        }
        
        if ((currentReagent.id === 1 && direction === 'back') || (currentReagent.id === reagentOptions.length && direction === 'forward')){
          
          reagentObject.linkText = 'back to main menu';
          return reagentObject;
        } else {
          if (direction === 'forward'){   
            const targetId = currentReagent.id + 1;
            const targetReagent = reagentOptions.filter((reagent) => {
              return reagent.id  === targetId;
            })
            return targetReagent[0];
          } else if (direction === 'back'){
            const targetId = currentReagent.id - 1;
            const targetReagent = reagentOptions.filter((reagent) => {
              return reagent.id === targetId;
            })
            return targetReagent[0];
          }    
        }
      }

      /*
      what needs to happen here is you need to take work off of the computational aspects of this module and refer back to data.js
      but also you need to dispatch the whole object as selected reagent to make the logic easier on each actual reagent page
      the "with" is not really helping you in the path because it doesn't make much sense without having "reactions" before it, if you
      get rid of that then the menu writer is already easier. But menu writer, rather than making a new object simply needs to 
      return from data.js the existing object that goes with the reagent. That's what menu writer needs to do: return that object
      and then the other logic bends to that
      */

return (
<div>
  
<ul className="list-group mt-4 fs-5" style={reactant ? {display: 'none'} : {display: 'flex'}}>
            {reagentOptions.map((reagent) =>               
              (<li
                className="list-group-item bg-light"
               >
                 <NavLink 
                   to={reagent.path}
                   className="d-block text-decoration-none"
                   onClick={() => dispatch(selectReagent(reagent))}
                   >
                     {`Section ${reagent.id}: Reactions with ${reagent.name}`}
                     
                 </NavLink>
               </li>)
            )}            
          </ul>
{/**/}
          <ul className="list-group list-group-horizontal mt-5 fs-5" style={reactant ? {display: 'flex'} : {display: 'none'}}>
                <li className="list-group-item bg-light w-50"><NavLink className="d-block text-decoration-none" to={menuWriter(reactant, 'back').path}  onClick={() => dispatch(selectReagent(menuWriter(reactant, 'back')))}><i className="mdi mdi-chevron-left"></i>Previous section: <strong>{menuWriter(reactant, 'back').linkText ? menuWriter(reactant, 'back').linkText : menuWriter(reactant, 'back').name}</strong></NavLink></li>
                <li className="list-group-item bg-light w-50"><NavLink className="d-block text-decoration-none text-end" to={menuWriter(reactant, 'forward').path} onClick={() => dispatch(selectReagent(menuWriter(reactant, 'forward')))}>Next section: <strong>{menuWriter(reactant, 'forward').linkText ? menuWriter(reactant, 'forward').linkText : menuWriter(reactant, 'forward').name}</strong><i className="mdi mdi-chevron-right"></i></NavLink></li>
            </ul>
              
          </div>);

              }

              export default Menu;

              /*

//onClick={() => dispatch(selectReagent({reagent: menuWriter(reactant, 'back').name}))}
//{menuWriter(reactant, 'back').linkText}


//onClick={() => dispatch(selectReagent({reagent: menuWriter(reactant, 'forward').name}))}
//{menuWriter(reactant, 'forward').linkText}




              const menuWriter = (currentUrl, direction) => {
        let reagentObject = {
          name: '',
          path: '',
          linkText: ''
        };
        if (!reactant) {
          reagentObject = {name: '', path: '/'};
         return reagentObject;
       }
        //const separatedWords = currentUrl.split('_');
        //const withRemoved = separatedWords.slice(1, separatedWords.length);
        // withRemoved.join(' ')
        const stringWithSpaces = dashBeGone(currentUrl);
        const currentSection = reagentOptions.findIndex((x) => x.name === stringWithSpaces);        
        
        

        if (direction === 'forward'){
            if (currentSection === (reagentOptions.length - 1)){
              reagentObject = {name: '', linkText: 'back to main menu', path: '/'};
                
            } else {
              const backReagent = reagentOptions[(currentSection + 1)].name;
               reagentObject = {name: backReagent, linkText: backReagent, path: `/${spaceBeGone(reagentOptions[(currentSection + 1)].name)}`};
                     
            }
        }
        else if (direction === 'back'){
            if (currentSection === 0){
              reagentObject = {name: '', linkText:'back to main menu', path: '/'};
            } else {
            const forwardReagent = reagentOptions[(currentSection - 1)].name;  
            reagentObject = {name: forwardReagent, linkText: forwardReagent, path: `/${spaceBeGone(reagentOptions[currentSection - 1].name)}`};
        }
        }
        return reagentObject;
    }
              
              */