//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import RowOfTubes from '../components/row-of-test-tubes/row-of-test-tubes';
import ReagentBottle from '../components/Reagent-bottle/reagent';
import ResetButton from '../components/resetButton/resetButton';

const reagentOptions = [
  {section: 1, name: 'concentrated hydrochloric acid'},
  {section: 2, name: 'sodium hydroxide'},
  {section: 3, name: 'ammonia solution'},
  {section: 4, name: 'sodium carbonate solution'}
]

function App(props) {
  const [reagent, setReagent] = useState('');

  const updateState = (reagent) => {
    setReagent(reagent);
    ResetButton.handleClick();
    //alert('surely theres a function here');
  }

  

  return (
    <div className="App">
      <header className="border-bottom py-5 overflow-hidden position-relative">
        <section className="container">
            <h1 className="display-2 m-0">Reactions of complex ions</h1>
        </section>
      </header>
      <section className="py-5">
        <div className="container">
          <div className="reagents-and-tubes">
            <ReagentBottle 
            onChange={updateState}
            />
            <RowOfTubes
            reagent={reagent}
            />
          </div>
      
          <ul className="list-group mt-4 fs-5">
            {reagentOptions.map((reagent) =>               
              (<li
                 className="list-group-item bg-light" 
               >
                 <a 
                   className="d-block text-decoration-none">
                     {`Section ${reagent.section}: Reactions with ${reagent.name}`}
                     <i className="mdi mdi-chevron-right mdi-24px float-end"></i>
                 </a>
               </li>)
            )}            
          </ul>
        </div>
      </section>
      <footer className="border-top py-5 overflow-hidden position-relative">        
        <div className="container">Copyright T Husband</div>
      </footer>
    </div>
  );
}

export default App;
