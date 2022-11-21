import App from './app/App';
import {
    createBrowserRouter,
    RouterProvider,
    Routes,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
//import Menu from './components/menu/menu';
import { Provider } from 'react-redux';
import RowOfTubes from './components/row-of-test-tubes/row-of-test-tubes';
import ReagentBottle from './components/Reagent-bottle/reagent';
import ReactionsContainer from './components/reactionsContainer/reactionsContainer';
import Introduction from './components/introduction/Introduction';
import store from './app/store';


  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path="/" element={<App />} >
        <Route path="/" element={<Introduction />} />
        <Route path="/:reactant" element={<ReactionsContainer />} />
        
      </Route>
      
      
    )
  );

  export default router;

  //<Route path="/:reactant" element={<ReactionsContainer />} />