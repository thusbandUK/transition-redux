import './app/App.css';
import React from 'react';
import { Outlet } from "react-router-dom";
//import Menu from '../features/menu/Menu';
import Header from './components/headerAndFooter/header';
import ReactionsContainer from './components/reactionsContainer/reactionsContainer';
import Introduction from './components/introduction/Introduction';


function Home(props) {  
  
  return (
    
    <div className="App">
      
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
    </div>
    
  );
}

export default Home;

