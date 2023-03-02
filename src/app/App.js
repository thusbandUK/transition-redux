import './App.css';
import React from 'react';
import { Outlet } from "react-router-dom";
//import Menu from '../features/menu/Menu';
import Header from '../components/headerAndFooter/header';
import Home from '../routerHome.js';
import { NavLink } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';


function App(props) {  

  //console.log(useParams());
  //const {currentUrl} = useParams();
  const pathName = useLocation().pathname;
  console.log(pathName);
  
  return (
    
    <div className="App">
      {(pathName === '/') ? 
      <div>
      <Outlet />
      </div>
      :
      null
    }
    {(pathName.includes('home')) ?
    <div>
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
    </div>
    :
    null
  
  }
    </div>
    
  );
}

export default App;

/*
<p>Hello</p>
      <NavLink 
                   to={"/home/"}
                   className="d-block text-decoration-none"
                   
                   
                   >
                     Take me home!
                     
                 </NavLink>

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