import './App.css';
import React from 'react';
import { Outlet } from "react-router-dom";
import Menu from '../features/menu/Menu';
import Header from '../components/headerAndFooter/header';


function App(props) {  
  
  return (
    
    <div className="App">
      {/** 
      <header className="border-bottom py-5 overflow-hidden position-relative">
        <section className="container">
            <h1 className="display-2 m-0">Reactions of complex ions {selectedReagent.name ? `with ${selectedReagent.name}` : ''}</h1>
        </section>
      </header>
      */}
      <Header />
      <section className="py-5">
        <div className="container">
          <div className="reagents-and-tubes">
          
          </div>          
          <Outlet />
          <Menu />

        </div>
      </section>
      
      <footer className="border-top py-5 overflow-hidden position-relative">        
        <div className="container">Copyright T Husband</div>
      </footer>
    </div>
    
  );
}

export default App;

