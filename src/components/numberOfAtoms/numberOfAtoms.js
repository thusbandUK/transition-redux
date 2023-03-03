import '../../app/App.css';
import React from 'react';
import { Outlet } from "react-router-dom";
//import Menu from '../features/menu/Menu';
import Header from '../headerAndFooter/header';
import ReactionsContainer from '../reactionsContainer/reactionsContainer';
import Introduction from '../introduction/Introduction';


function NumberOfAtoms(props) {  
  
  return (
    
    <div className="App">
        <p>Hello I'm number of atoms page</p>
      
      
    </div>
    
  );
}

export default NumberOfAtoms;

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