import '../../app/App.css';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { spaceBeGone, dashBeGone } from '../functionModules/urlTranslator';

const Menu = () => {

    const reagentOptions = [
        {section: 1, name: 'concentrated hydrochloric acid'},
        {section: 2, name: 'sodium hydroxide'},
        {section: 3, name: 'ammonia solution'},
        {section: 4, name: 'sodium carbonate solution'}
      ]

      const {reactant} = useParams();

      const menuWriter = (currentUrl, direction) => {
        let reagentObject = {
          name: '',
          path: ''
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
              reagentObject = {name: 'back to main menu', path: '/'};
                
            } else {
               reagentObject = {name: reagentOptions[(currentSection + 1)].name, path: `/with_${spaceBeGone(reagentOptions[(currentSection + 1)].name)}`};
                     
            }
        }
        else if (direction === 'back'){
            if (currentSection === 0){
              reagentObject = {name: 'back to main menu', path: '/'};
            } else {
              
            reagentObject = {name: reagentOptions[(currentSection - 1)].name, path: `/with_${spaceBeGone(reagentOptions[currentSection - 1].name)}`};
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
                   >
                     {`Section ${reagent.section}: Reactions with ${reagent.name}`}
                     
                 </NavLink>
               </li>)
            )}            
          </ul>

          <ul className="list-group list-group-horizontal mt-5 fs-5" style={reactant ? {display: 'flex'} : {display: 'none'}}>
                <li className="list-group-item bg-light w-50"><NavLink className="d-block text-decoration-none" to={menuWriter(reactant, 'back').path}><i className="mdi mdi-chevron-left"></i>Previous section: <strong>{menuWriter(reactant, 'back').name}</strong></NavLink></li>
                <li className="list-group-item bg-light w-50"><NavLink className="d-block text-decoration-none text-end" to={menuWriter(reactant, 'forward').path}>Next section: <strong>{menuWriter(reactant, 'forward').name}</strong><i className="mdi mdi-chevron-right"></i></NavLink></li>
            </ul>

          </div>);

              }

              export default Menu;