import '../../app/App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';



function LandingPage(props) {  
  
  return (
    
    <div className="App">
      <p>Hello I'm the landing page!</p>
      <NavLink 
                   to={"/home/"}
                   className="d-block text-decoration-none"
                   
                   
                   >
                     Take me home!
                     
                 </NavLink>
    </div>
    
  );
}

export default LandingPage;

