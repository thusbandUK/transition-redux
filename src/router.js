import App from './app/App';
import {
    createBrowserRouter,    
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import ReactionsContainer from './components/reactionsContainer/reactionsContainer';
import Introduction from './components/introduction/Introduction';

  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path="/" element={<App />} >
        <Route path="/" element={<Introduction />} />
        <Route path="/:reactant" element={<ReactionsContainer />} />
      </Route>
    )
  );

  export default router;