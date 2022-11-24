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
  
  

//BELOW REPLACES ABOVE (MOTHBALLED)
/*
useEffect(() => {  
          let reagentOptions = []; 
          data.reagentOptions.map((reagent) => {
            if (reagent.true.includes(examBoard)){              
              reagentOptions.push(reagent);     
              delete reagent.true;        
            }          
          })
      dispatch(selectReagentOptions(reagentOptions))
  }, [dispatch, examBoard]);

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

          <ul className="list-group list-group-horizontal mt-5 fs-5" style={reactant ? {display: 'flex'} : {display: 'none'}}>
            <li className="list-group-item bg-light w-50"><NavLink className="d-block text-decoration-none" to={menuWriter(reactant, 'back').path}  onClick={() => dispatch(selectReagent(menuWriter(reactant, 'back')))}><i className="mdi mdi-chevron-left"></i>Previous section: <strong>{menuWriter(reactant, 'back').linkText ? menuWriter(reactant, 'back').linkText : menuWriter(reactant, 'back').name}</strong></NavLink></li>
            <li className="list-group-item bg-light w-50"><NavLink className="d-block text-decoration-none text-end" to={menuWriter(reactant, 'forward').path} onClick={() => dispatch(selectReagent(menuWriter(reactant, 'forward')))}>Next section: <strong>{menuWriter(reactant, 'forward').linkText ? menuWriter(reactant, 'forward').linkText : menuWriter(reactant, 'forward').name}</strong><i className="mdi mdi-chevron-right"></i></NavLink></li>
          </ul>
              
        </div>
  );

}

export default Menu;

              