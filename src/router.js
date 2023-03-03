import App from './app/App';
import React from 'react';
import {
    createBrowserRouter,    
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import ReactionsContainer from './components/reactionsContainer/reactionsContainer';
import Introduction from './components/introduction/Introduction';
import Home from './components/home/home';
import LandingPage from './components/landingPage/landingPage';
import NumberOfAtoms from './components/numberOfAtoms/numberOfAtoms';

  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path="/" element={<App />} >
        
          <Route path="/" element={<LandingPage />} />
          <Route path="/home/" element={<Home />} />
          <Route path="/number-of-atoms/" element={<NumberOfAtoms />} />
          <Route path="/transition-metals/introduction/" element={<Introduction />} />             
             <Route path="/transition-metals/:reactant" element={<ReactionsContainer />} />
          <Route />
          
      </Route>
    )
  );

  export default router;  