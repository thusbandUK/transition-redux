import '../../app/App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {

    const reagentOptions = [
        {section: 1, name: 'concentrated-hydrochloric-acid'},
        {section: 2, name: 'sodium-hydroxide'},
        {section: 3, name: 'ammonia-solution'},
        {section: 4, name: 'sodium-carbonate-solution'}
      ]
return (
<div>
<ul className="list-group mt-4 fs-5">
            {reagentOptions.map((reagent) =>               
              (<li
                className="list-group-item bg-light"
               >
                 <NavLink 
                   to={`/with-${reagent.name}`}
                   className="d-block text-decoration-none"
                   >
                     {`Section ${reagent.section}: Reactions with ${reagent.name}`}
                     
                 </NavLink>
               </li>)
            )}            
          </ul>
          </div>);

              }

              export default Menu;