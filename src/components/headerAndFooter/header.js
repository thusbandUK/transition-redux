import '../../app/App.css';
import React from 'react';
import { useSelector } from 'react-redux';


function Header() {
  
  const selectedReagent = useSelector(state => state.menu.selectedReagent);

  return (
    
    <div className="App">
      <header className="border-bottom py-5 overflow-hidden position-relative">
        <section className="container">
            <h1 className="display-2 m-0">Reactions of complex ions {selectedReagent.name ? `with ${selectedReagent.name}` : ''}</h1>
        </section>
      </header>      
    </div>
    
  );
}

export default Header;

