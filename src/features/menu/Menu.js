import '../../app/App.css';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { spaceBeGone, dashBeGone } from '../../components/functionModules/urlTranslator';
import { useSelector, useDispatch } from 'react-redux';
import { data } from '../../data';
import { selectReagent } from './menuSlice';

const Menu = () => {

    const examBoard = useSelector(state => state.examBoard.selectedExamBoard);

    const selectedReagent = useSelector(state => state.menu.selectedReagent)
    const dispatch = useDispatch()
    const reagentOptions = useSelector(state => state.examBoard.reagentOptions)


    /*
    const reagentOptions = data.reagentOptions.filter((reagent) => {
      return reagent.true.includes(examBoard);
    })
*/
//alert(reagentOptions[0]);

/*
    const reagentOptions = [
        {section: 1, name: 'concentrated hydrochloric acid'},
        {section: 2, name: 'sodium hydroxide'},
        {section: 3, name: 'ammonia solution'},
        {section: 4, name: 'sodium carbonate solution'}
      ]
*/
      const {reactant} = useParams();

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
        const separatedWords = currentUrl.split('_');
        const withRemoved = separatedWords.slice(1, separatedWords.length);
        const stringWithSpaces = withRemoved.join(' ');
        const currentSection = reagentOptions.findIndex((x) => x.name === stringWithSpaces);        
        
        if (direction === 'forward'){
            if (currentSection === (reagentOptions.length - 1)){
              reagentObject = {name: '', linkText: 'back to main menu', path: '/'};
                
            } else {
              const backReagent = reagentOptions[(currentSection + 1)].name;
               reagentObject = {name: backReagent, linkText: backReagent, path: `/with_${spaceBeGone(reagentOptions[(currentSection + 1)].name)}`};
                     
            }
        }
        else if (direction === 'back'){
            if (currentSection === 0){
              reagentObject = {name: '', linkText:'back to main menu', path: '/'};
            } else {
            const forwardReagent = reagentOptions[(currentSection - 1)].name;  
            reagentObject = {name: forwardReagent, linkText: forwardReagent, path: `/with_${spaceBeGone(reagentOptions[currentSection - 1].name)}`};
        }
        }
        return reagentObject;
    }

      

return (
<div>
<ul className="list-group mt-4 fs-5" style={reactant ? {display: 'none'} : {display: 'flex'}}>
            {reagentOptions.map((reagent) =>               
              (<li
                className="list-group-item bg-light"
               >
                 <NavLink 
                   to={`/with_${spaceBeGone(reagent.name)}`}
                   className="d-block text-decoration-none"
                   onClick={() => dispatch(selectReagent({reagent: reagent.name}))}
                   >
                     {`Section ${reagent.section}: Reactions with ${reagent.name}`}
                     
                 </NavLink>
               </li>)
            )}            
          </ul>

          <ul className="list-group list-group-horizontal mt-5 fs-5" style={reactant ? {display: 'flex'} : {display: 'none'}}>
                <li className="list-group-item bg-light w-50"><NavLink className="d-block text-decoration-none" to={menuWriter(reactant, 'back').path} onClick={() => dispatch(selectReagent({reagent: menuWriter(reactant, 'back').name}))} ><i className="mdi mdi-chevron-left"></i>Previous section: <strong>{menuWriter(reactant, 'back').linkText}</strong></NavLink></li>
                <li className="list-group-item bg-light w-50"><NavLink className="d-block text-decoration-none text-end" to={menuWriter(reactant, 'forward').path} onClick={() => dispatch(selectReagent({reagent: menuWriter(reactant, 'forward').name}))}>Next section: <strong>{menuWriter(reactant, 'forward').linkText}</strong><i className="mdi mdi-chevron-right"></i></NavLink></li>
            </ul>

          </div>);

              }

              export default Menu;