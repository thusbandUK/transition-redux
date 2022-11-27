import '../../app/App.css';
import React, { useEffect, useCallback } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { data } from '../../data';
import { selectReagent, selectReagentOptions } from './menuSlice';

const Menu = () => {

    const examBoard = useSelector(state => state.examBoard.selectedExamBoard);
    const reagentOptions = useSelector(state => state.menu.reagentOptions);
    const dispatch = useDispatch()
    
    //Effect hook renders list of available reactants upon selection of examboard on intro page

    useEffect(() => {   
          const reagentOptions = data.reagentOptions.filter((reagent) => {
            return reagent.true.includes(examBoard);
           // if (reagent.true.includes(examBoard)){              
             // return reagent;
           // }          
          })
      dispatch(selectReagentOptions(reagentOptions))
  }, [dispatch, examBoard]);
  
  

      const {reactant} = useParams();

      /*menuWriter handles the logic to decide which choices are rendered on the reaction pages menu, ie the next reagent and the last
      reagent, including overriding features which offer "back to main menu" for the first back option and the final forward option,
      which returns an object with an empty name string so that "back to main menu" is not added to the state as an available reagent.
      Where actual reagents are selected, the function returns the whole entry for that reagent from data.js, including useful details
      such as image link and altText, so the reagent bottle image can be rendered once the selected page is loaded */

      const menuWriter = useCallback((currentUrl, direction) => {  
        var reagentObject = {name: '', path: '/', linkText: '', id: 0};
       if (!reactant) {    
         return reagentObject;
       }
       //alert(reagentObject.path);
       let currentReagent = {name: '', path: '/', linkText: '', id: 0};
       reagentOptions.forEach((x) => {    
        if (x.path.includes(currentUrl) === true){      
          currentReagent = x;
        }
      })
        if (direction === ''){
          return currentReagent;
        }
        //alert(currentReagent.id);
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
      }, [reactant, reagentOptions])

      
return (
        <div>

          {/*JSX for intro page menu */}
  
          <ul className="list-group mt-4 fs-5" style={reactant ? {display: 'none'} : {display: 'flex'}}>
            {reagentOptions.map((reagent) =>               
              (<li
                className="list-group-item bg-light"
                key={reagent.id}
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

        {/*JSX for reaction pages menu */}

          <ul className="list-group list-group-horizontal mt-5 fs-5" style={reactant ? {display: 'flex'} : {display: 'none'}}>
            <li className="list-group-item bg-light w-50" key={menuWriter(reactant, 'back').id}><NavLink className="d-block text-decoration-none" to={menuWriter(reactant, 'back').path}  onClick={() => dispatch(selectReagent(menuWriter(reactant, 'back')))}><i className="mdi mdi-chevron-left"></i>Previous section: <strong>{menuWriter(reactant, 'back').linkText ? menuWriter(reactant, 'back').linkText : menuWriter(reactant, 'back').name}</strong></NavLink></li>
            <li className="list-group-item bg-light w-50" key={menuWriter(reactant, 'forward').id}><NavLink className="d-block text-decoration-none text-end" to={menuWriter(reactant, 'forward').path} onClick={() => dispatch(selectReagent(menuWriter(reactant, 'forward')))}>Next section: <strong>{menuWriter(reactant, 'forward').linkText ? menuWriter(reactant, 'forward').linkText : menuWriter(reactant, 'forward').name}</strong><i className="mdi mdi-chevron-right"></i></NavLink></li>
          </ul>
              
        </div>
  );

}

export default Menu;

              