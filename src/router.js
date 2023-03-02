import App from './app/App';
import React from 'react';
import {
    createBrowserRouter,    
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import ReactionsContainer from './components/reactionsContainer/reactionsContainer';
import Introduction from './components/introduction/Introduction';
import Home from './routerHome';
import LandingPage from './routerLandingPage';

  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path="/" element={<App />} >
        
          <Route path="/" element={<LandingPage />} />
          <Route path="/home/" element={<Home />} />
             <Route path="/home/introduction/" element={<Introduction />} />
             <Route path="/home/:reactant" element={<ReactionsContainer />} />
          <Route />
          
      </Route>
    )
  );

  export default router;  