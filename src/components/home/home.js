import '../../app/App.css';
import React from 'react';
import { Outlet } from "react-router-dom";
//import Menu from '../features/menu/Menu';
import Header from '../headerAndFooter/header';
import ReactionsContainer from '../reactionsContainer/reactionsContainer';
import Introduction from '../introduction/Introduction';
import { NavLink } from 'react-router-dom';


function Home(props) {  
  
  return (
    
    <div className="App">
                <NavLink 
                   to={"/number-of-atoms/"}
                   className="d-block text-decoration-none"
                   
                   
                   >
                     Take me to the number of atoms!
                     
                 </NavLink>
                 <NavLink 
                   to={"/transition-metals/introduction/"}
                   className="d-block text-decoration-none"
                   
                   
                   >
                     Take me to the transition metals!
                     
                 </NavLink>
      
      
    </div>
    
  );
}

export default Home;

/*
<Header />
      <section className="py-5">
        <div className="container">
          <div className="reagents-and-tubes">
          
          </div>        
            
          
           
        </div>
      </section>
      
      <footer className="border-top py-5 overflow-hidden position-relative">        
        <div className="container">Copyright T Husband</div>
      </footer>
*/