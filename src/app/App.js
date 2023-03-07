import './App.css';
import React from 'react';
import { Outlet } from "react-router-dom";
//import Menu from '../features/menu/Menu';
import Header from '../components/headerAndFooter/header';
import Home from '../components/home/home.js';
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
      <div className="landing-wrapper">
      <Outlet />
      </div>
      :
      <div>
    <Header 
    pathName={pathName}
    />
    <section className="py-5">
      <div className="container">
        <div className="reagents-and-tubes">
        
        </div>          
        <Outlet />
         
      </div>
    </section>
    
    <footer className="border-top py-5 overflow-hidden position-relative">  
      <div id="pseudo-footer">

      </div>      
      <nav class="navbar sticky-top navbar-expand-lg container">
      
      <div class="container-fluid " id="navbar-container">        
        
          
          <div className="navbar-brand text-wrap fs-5">Copyright T Husband</div>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">                  
                  <NavLink 
                    to={"/home/"}
                    className="nav-link text-decoration-none ms-lg-5 fs-5"                   
                  >
                    Home                     
                  </NavLink>
                </li>
                <li class="nav-item">                  
                  <NavLink 
                    to={"/home/"}
                    className="nav-link text-decoration-none ms-lg-5 fs-5"                   
                  >
                    Privacy                     
                  </NavLink>
                </li>
                <li class="nav-item">                  
                  <NavLink 
                    to={"/home/"}
                    className="nav-link text-decoration-none ms-lg-5 fs-5"                   
                  >
                    Cookies                     
                  </NavLink>
                </li>                
            </ul>            
          </div>          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          </div>        
      </nav>
      {/*
<div class="logo-heading">
            <p >Logo</p>
          </div> 

      <nav id="footer-nav" className="navbar px-4 pt-3 position-absolute top-50 start-50 translate-middle">
      <div class="container-fluid">
        <div className="navbar-brand text-wrap fs-5">Copyright T Husband</div>
        <ul class="navbar-nav d-flex flex-md-row justify-content-md-around flex-grow-1 pe-3">
                <li class="nav-item">                  
                  <NavLink 
                    to={"/home/"}
                    className="nav-link text-decoration-none ms-5 fs-5"                   
                  >
                    Home                     
                  </NavLink>
                </li>
                <li class="nav-item">                  
                  <NavLink 
                    to={"/home/"}
                    className="nav-link text-decoration-none ms-5 fs-5"                   
                  >
                    Privacy                     
                  </NavLink>
                </li>
                <li class="nav-item">                  
                  <NavLink 
                    to={"/home/"}
                    className="nav-link text-decoration-none ms-5 fs-5"                   
                  >
                    Cookies                     
                  </NavLink>
                </li>                
              </ul>
        
        
        </div>
      </nav>
  */}
    </footer>
    </div>
    }
    
    </div>
    
  );
}

export default App;

/*

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