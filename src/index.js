import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './custom.scss';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Menu from './components/menu/menu';
import RowOfTubes from './components/row-of-test-tubes/row-of-test-tubes';
import ReagentBottle from './components/Reagent-bottle/reagent';
import router from './router';
import store from './app/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider 
    store={store}
    >
    <RouterProvider 
    router={router}
    
    />
    </Provider>
    
      
  </React.StrictMode>
);

// 
/*
<Provider 
    router={router}
    store={store}
    />

*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
