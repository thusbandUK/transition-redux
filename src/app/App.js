import './App.css';
import React from 'react';
import { Outlet } from "react-router-dom";
//import Menu from '../features/menu/Menu';
import Header from '../components/headerAndFooter/header';
import Home from '../routerHome.js';
import { NavLink } from 'react-router-dom';


function App(props) {  
  
  return (
    
    <div className="App">
      <p>Hello</p>
      <NavLink 
                   to={"/home/"}
                   className="d-block text-decoration-none"
                   
                   
                   >
                     Take me home!
                     
                 </NavLink>
      <Outlet />
    </div>
    
  );
}

export default App;

/*
<Header />
      <section className="py-5">
        <div className="container">
          <div className="reagents-and-tubes">
          
          </div>          
          <Outlet />
           
        </div>
      </section>
      
      <footer className="border-top py-5 overflow-hidden position-relative">        
        <div className="container">Copyright T Husband</div>
      </footer>
      */