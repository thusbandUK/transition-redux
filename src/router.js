import App from './app/App';
import {
    createBrowserRouter,
    RouterProvider,
    Routes,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import Menu from './components/menu/menu';
import RowOfTubes from './components/row-of-test-tubes/row-of-test-tubes';
import ReagentBottle from './components/Reagent-bottle/reagent';
import ReactionsContainer from './components/reactionsContainer/reactionsContainer';


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />} >
        <Route path="/:reactant" element={<ReactionsContainer />} />
        
      </Route>
      
    )
  );
/*


<Route path="/" element={<Menu />} />

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        
        {
          path: "/introduction",
          element: <Menu />,
        }
      ]
    },  
    
  ]);
*/
  export default router;