import '../../app/App.css';
import React from 'react';


const Menu = () => {

    const reagentOptions = [
        {section: 1, name: 'concentrated hydrochloric acid'},
        {section: 2, name: 'sodium hydroxide'},
        {section: 3, name: 'ammonia solution'},
        {section: 4, name: 'sodium carbonate solution'}
      ]
return (
<div>
<ul className="list-group mt-4 fs-5">
            {reagentOptions.map((reagent) =>               
              (<li
                 className="list-group-item bg-light" 
               >
                 <a 
                   className="d-block text-decoration-none">
                     {`Section ${reagent.section}: Reactions with ${reagent.name}`}
                     <i className="mdi mdi-chevron-right mdi-24px float-end"></i>
                 </a>
               </li>)
            )}            
          </ul>
          </div>);

              }

              export default Menu;