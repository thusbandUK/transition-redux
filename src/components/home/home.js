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
    
    <div className="App home">
      <p className="fs-4">Welcome to Now Chemistry! On this site you can find out the number of atoms of each element in your body 
      or learn about the reactions of complex ions. More content will be added all the time so come back soon!</p>

      <div className="row w-100 mx-0 d-flex justify-content-between">
        <button className="btn col-md-4 bg-light p-5 m-5 rounded-3 btn-outline-primary" >
                <NavLink 
                   to={"/number-of-atoms/"}
                   className="d-block text-decoration-none fs-5"
                   
                   
                   >
                     Number of Atoms Calculator
                     
                 </NavLink>
                 </button>
                 <button className="btn col-md-4 bg-light p-5 m-5 rounded-3 btn-outline-primary">
                 <NavLink 
                   to={"/transition-metals/introduction/"}
                   className="d-block text-decoration-none fs-5"
                   
                   
                   >
                     Reactions of Complex Ions
                     
                 </NavLink>
                 </button>
                 </div>
      
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