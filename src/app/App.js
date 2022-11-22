//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import RowOfTubes from '../components/row-of-test-tubes/row-of-test-tubes';
import ReagentBottle from '../components/Reagent-bottle/reagent';
import ResetButton from '../components/resetButton/resetButton';
import { BrowserRouter as Router, Route, Routes, Switch, NavLink, useParams } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import Menu from '../features/menu/Menu';
import { dashBeGone } from '../components/functionModules/urlTranslator';
import ExamBoard from '../components/examBoard/ExamBoard';
import Introduction from '../components/introduction/Introduction';
import ReactionsContainer from '../components/reactionsContainer/reactionsContainer';
import { useSelector, useDispatch } from 'react-redux';

const reagentOptions = [
  {section: 1, name: 'concentrated hydrochloric acid'},
  {section: 2, name: 'sodium hydroxide'},
  {section: 3, name: 'ammonia solution'},
  {section: 4, name: 'sodium carbonate solution'}
]

function App(props) {
  const [reagent, setReagent] = useState('');
  const selectedReagent = useSelector(state => state.menu.selectedReagent);

  const updateState = (reagent) => {
    setReagent(reagent);
    ResetButton.handleClick();
    //alert('surely theres a function here');
  }

  const {reactant} = useParams();

  return (
    
    <div className="App">
      <header className="border-bottom py-5 overflow-hidden position-relative">
        <section className="container">
            <h1 className="display-2 m-0">Reactions of complex ions {selectedReagent.name ? `with ${selectedReagent.name}` : ''}</h1>
        </section>
      </header>
      
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

//<Outlet />

/*
<Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/:reactant" element={<ReactionsContainer />} />
          </Routes>
          

*/

//Reactions of complex ions {dashBeGone(reactant)}